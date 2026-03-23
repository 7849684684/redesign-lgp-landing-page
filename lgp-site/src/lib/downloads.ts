import fs from "fs";
import path from "path";

export interface Download {
  title: string;
  description: string;
  filename: string;
  fileSize: string;
  category: string;
  dateAdded: string;
}

const DOWNLOADS_PATH = path.join(process.cwd(), "src/content/downloads.json");

export function getAllDownloads(): Download[] {
  if (!fs.existsSync(DOWNLOADS_PATH)) return [];

  const raw = fs.readFileSync(DOWNLOADS_PATH, "utf-8");
  return JSON.parse(raw) as Download[];
}
