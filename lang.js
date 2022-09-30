import fs from "fs";
const pl = JSON.parse(fs.readFileSync("polish.json"));
const en = JSON.parse(fs.readFileSync("english.json"));

export function getLanguage(lang) {
    if (lang == "pl") return pl;
    if (lang == "en") return en;
    return "pl";
}
