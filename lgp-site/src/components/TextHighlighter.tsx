"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

interface Highlight {
  text: string;
  textBefore: string;
  textAfter: string;
}

interface TextHighlighterProps {
  slug: string;
  children: ReactNode;
}

const STORAGE_PREFIX = "lgp-highlights-";
const MAX_HIGHLIGHTS = 50;
const CONTEXT_LENGTH = 30;

function getStorageKey(slug: string) {
  return `${STORAGE_PREFIX}${slug}`;
}

function loadHighlights(slug: string): Highlight[] {
  try {
    const raw = localStorage.getItem(getStorageKey(slug));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHighlights(slug: string, highlights: Highlight[]) {
  localStorage.setItem(getStorageKey(slug), JSON.stringify(highlights.slice(0, MAX_HIGHLIGHTS)));
}

function getTextContext(range: Range, container: HTMLElement): { before: string; after: string } {
  const fullText = container.textContent || "";
  const rangeText = range.toString();
  const idx = fullText.indexOf(rangeText);
  if (idx === -1) return { before: "", after: "" };
  return {
    before: fullText.slice(Math.max(0, idx - CONTEXT_LENGTH), idx),
    after: fullText.slice(idx + rangeText.length, idx + rangeText.length + CONTEXT_LENGTH),
  };
}

function findAndWrapText(container: HTMLElement, highlight: Highlight): HTMLElement | null {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let accumulated = "";
  const textNodes: { node: Text; start: number }[] = [];

  let node: Text | null;
  while ((node = walker.nextNode() as Text | null)) {
    textNodes.push({ node, start: accumulated.length });
    accumulated += node.textContent || "";
  }

  // Find the highlight text with context matching
  const fullText = accumulated;
  let searchFrom = 0;
  let bestIdx = -1;

  while (true) {
    const idx = fullText.indexOf(highlight.text, searchFrom);
    if (idx === -1) break;

    const before = fullText.slice(Math.max(0, idx - CONTEXT_LENGTH), idx);
    const after = fullText.slice(idx + highlight.text.length, idx + highlight.text.length + CONTEXT_LENGTH);

    if (
      (!highlight.textBefore || before.includes(highlight.textBefore.slice(-10))) &&
      (!highlight.textAfter || after.includes(highlight.textAfter.slice(0, 10)))
    ) {
      bestIdx = idx;
      break;
    }
    searchFrom = idx + 1;
  }

  if (bestIdx === -1) {
    // Fallback: first occurrence without context check
    bestIdx = fullText.indexOf(highlight.text);
  }
  if (bestIdx === -1) return null;

  // Find the text node(s) that contain this range
  const startOffset = bestIdx;
  const endOffset = bestIdx + highlight.text.length;

  let startNode: Text | null = null;
  let startNodeOffset = 0;
  let endNode: Text | null = null;
  let endNodeOffset = 0;

  for (const tn of textNodes) {
    const nodeEnd = tn.start + (tn.node.textContent?.length || 0);
    if (!startNode && startOffset >= tn.start && startOffset < nodeEnd) {
      startNode = tn.node;
      startNodeOffset = startOffset - tn.start;
    }
    if (endOffset > tn.start && endOffset <= nodeEnd) {
      endNode = tn.node;
      endNodeOffset = endOffset - tn.start;
    }
  }

  if (!startNode || !endNode) return null;

  try {
    const range = document.createRange();
    range.setStart(startNode, startNodeOffset);
    range.setEnd(endNode, endNodeOffset);

    const mark = document.createElement("mark");
    mark.className = "blog-highlight";
    mark.dataset.highlightText = highlight.text;
    range.surroundContents(mark);
    return mark;
  } catch {
    return null;
  }
}

export default function TextHighlighter({ slug, children }: TextHighlighterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null);
  const [pendingRange, setPendingRange] = useState<Range | null>(null);

  // Restore highlights on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Small delay to let MDX render
    const timer = setTimeout(() => {
      const highlights = loadHighlights(slug);
      highlights.forEach((h) => {
        const mark = findAndWrapText(container, h);
        if (mark) {
          addRemoveButton(mark, slug);
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  const addRemoveButton = useCallback((mark: HTMLElement, articleSlug: string) => {
    const btn = document.createElement("button");
    btn.className = "highlight-remove";
    btn.textContent = "\u00d7";
    btn.setAttribute("aria-label", "Remove highlight");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = mark.dataset.highlightText || "";
      // Unwrap the mark
      const parent = mark.parentNode;
      if (parent) {
        while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
        parent.removeChild(mark);
        parent.normalize();
      }
      // Remove from storage
      const stored = loadHighlights(articleSlug);
      const updated = stored.filter((h) => h.text !== text);
      saveHighlights(articleSlug, updated);
    });
    mark.appendChild(btn);
  }, []);

  function handleMouseUp() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) {
      setPopup(null);
      setPendingRange(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const text = range.toString().trim();
    if (!text || text.length < 3) {
      setPopup(null);
      return;
    }

    // Check selection is inside our container
    if (!containerRef.current?.contains(range.commonAncestorContainer)) {
      setPopup(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    setPopup({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
    setPendingRange(range.cloneRange());
  }

  function handleSaveHighlight() {
    if (!pendingRange || !containerRef.current) return;

    const text = pendingRange.toString().trim();
    const { before, after } = getTextContext(pendingRange, containerRef.current);

    const highlight: Highlight = { text, textBefore: before, textAfter: after };

    // Check for duplicates
    const existing = loadHighlights(slug);
    if (existing.some((h) => h.text === text && h.textBefore === before)) {
      setPopup(null);
      setPendingRange(null);
      return;
    }

    // Wrap in mark
    try {
      const mark = document.createElement("mark");
      mark.className = "blog-highlight";
      mark.dataset.highlightText = text;
      pendingRange.surroundContents(mark);
      addRemoveButton(mark, slug);
    } catch {
      // surroundContents can fail if selection spans elements
    }

    // Save
    saveHighlights(slug, [...existing, highlight]);
    window.getSelection()?.removeAllRanges();
    setPopup(null);
    setPendingRange(null);
  }

  return (
    <div ref={containerRef} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp} className="relative">
      {children}
      {popup && (
        <button
          onClick={handleSaveHighlight}
          className="fixed z-50 w-8 h-8 rounded-full bg-brand-amber text-white flex items-center justify-center text-sm shadow-lg hover:scale-110 transition-transform"
          style={{ left: popup.x - 16, top: popup.y + window.scrollY - 40 }}
          aria-label="Save highlight"
        >
          &#9733;
        </button>
      )}
    </div>
  );
}
