import { writeFileSync } from "fs";

export function writeJSON(path: string, data: any): void {
  writeFileSync(path, JSON.stringify(data, null, 2));
}
