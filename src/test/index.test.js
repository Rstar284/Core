import { tokenizer as token } from "../lib/tokenizer.js";

console.log(token("$&*+-(){}[]!=\n#comment will be ignored\n$&&$"));