import { CMYK, JpColor, RGB } from "./color.define";
import { readJSON } from "./util/read-json";
import { writeJSON } from "./util/write-json";

let colors: JpColor[] = readJSON("./jp-color.json");

console.log("\n");
console.log("colors.length:", colors.length, "\ncolors[0]:", colors[0]);
console.log("\n");

function colorCodeToRGB(color: string): RGB {
  //TODO: Please implement it
  return;
}

function rgbToCMYK(rgb: RGB): CMYK {
  //TODO: Please implement it
  return;
}

for (let item of colors) {
  item.RGB = colorCodeToRGB(item.color);
  item.CMYK = rgbToCMYK(item.RGB);
}

writeJSON("./homework-answer.json", colors);
