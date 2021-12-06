import { readFileSync } from "fs";

export function readJSON<T = any>(path: string): T {
  return JSON.parse(readFileSync(path).toString());
}
