"use client";

import { useRef, useEffect, useMemo } from "react";
import rough from "roughjs";
import type { Options } from "roughjs/bin/core";

export function useRoughSvg() {
  const svgRef = useRef<SVGSVGElement>(null);

  const rc = useMemo(() => {
    if (typeof document === "undefined") return null;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return rough.svg(svg);
  }, []);

  return { svgRef, rc };
}

// Extract the `d` attribute from a rough.js generated SVG element
export function extractPath(
  rc: ReturnType<typeof rough.svg>,
  shape: "circle" | "ellipse" | "rectangle" | "line" | "arc",
  args: number[],
  options: Options = {},
): string[] {
  let node: SVGGElement;

  switch (shape) {
    case "ellipse":
    case "circle":
      node = rc.ellipse(args[0], args[1], args[2], args[3] ?? args[2], options);
      break;
    case "rectangle":
      node = rc.rectangle(args[0], args[1], args[2], args[3], options);
      break;
    case "line":
      node = rc.line(args[0], args[1], args[2], args[3], options);
      break;
    case "arc":
      node = rc.arc(args[0], args[1], args[2], args[3], args[4], args[5], false, options);
      break;
    default:
      return [];
  }

  const paths: string[] = [];
  node.querySelectorAll("path").forEach((p) => {
    const d = p.getAttribute("d");
    if (d) paths.push(d);
  });
  return paths;
}
