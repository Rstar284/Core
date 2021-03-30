import { tokenizer as token } from "../lib/tokenizer.js";

console.time("Process");
console.log(token("ф"));
console.timeEnd("Process")