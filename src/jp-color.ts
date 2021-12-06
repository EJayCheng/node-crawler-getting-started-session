import cheerio from "cheerio";
import got from "got";
import { JpColor } from "./color.define";
import { writeJSON } from "./util/write-json";

const regexp = /#(col\d+)\sa\{-webkit-tap-highlight-color:(\#\w{6,6})\}/gim;

async function fetchColorMap() {
  const cssText = await got
    .get("https://nipponcolors.com/min/g=nipponcolors_css")
    .text();

  const colorMap = new Map<string, string>();

  do {
    let match = regexp.exec(cssText);
    if (!match) break;
    let id = match[1];
    let color = match[2];
    colorMap.set(id, color);
  } while (true);

  return colorMap;
}

async function main() {
  const colorMap = await fetchColorMap();
  const html = await got.get("https://nipponcolors.com/").text();
  const $ = cheerio.load(html);
  let liList = $("ul#colors>li").toArray();
  let rows: JpColor[] = liList
    .map((li) => {
      let $li = $(li);
      let id = $li.attr("id");
      if (!id) return;
      let $a = $li.find("a");
      let [chName, enName] = $a
        .text()
        .split(",")
        .map((t) => t.trim());
      return { id, chName, enName, color: colorMap.get(id) };
    })
    .filter(Boolean);

  writeJSON("./jp-color.json", rows);
}

main();
