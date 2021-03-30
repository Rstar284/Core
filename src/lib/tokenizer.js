/* tokenizer.js */

// Imports the RegExp
import {
    NEWLINE,
    NUMBER,
    BACKSLASH,
    WHITESPACE,
    LETTER
} from "./syntax.js";

// Export the 'tokenizer' function
export function tokenizer(input = "") { 
    // Define the variables
    let count, result, tokens;
    
    // Define the properties
    count = 0;
    result = {};
    tokens = [];
    
    //Loop over the input string one by one
    while (count < input.length) {
        // We will use 'now' as the current character
        const now = input[count];
        
        // We will check what 'now' is currently
        if (now === "+") {
            tokens.push({ type: "plus", value: "+" });
            count++;
            continue;
        } else if (now === "*") {
            tokens.push({ type: "star", value: "*" });
            count++;
            continue;
        } else if (now === "-") {
            tokens.push({ type: "minus", value: "-" });
            count++;
            continue;
        } else if (now === "!") {
            tokens.push({ type: "not", value: "!" });
            count++;
            continue;
        } else if (now === "$") {
            tokens.push({ type: "dollar", value: "$" });
            count++;
            continue;
        } else if (now === "%") {
            tokens.push({ type: "percent", value: "%" });
            count++;
            continue;
        } else if (now === "|") {
            tokens.push({ type: "pipe", value: "|" });
            count++;
            continue;
        } else if (now === "<") {
            tokens.push({ type: "less", value: "<" });
            count++;
            continue;
        } else if (now === ">") {
            tokens.push({ type: "great", value: ">" });
            count++;
            continue;
        } else if (now === "&") {
            tokens.push({ type: "and", value: "&" });
            count++;
            continue;
        } else if (now === "=") {
            tokens.push({ type: "equal", value: "=" });
            count++;
            continue;
        } else if (now === "[" || now === "]") {
            tokens.push({ type: "bracket", value: now });
            count++;
            continue;
        } else if (now === "(" || now === ")") {
            tokens.push({ type: "paran", value: now });
            count++;
            continue;
        } else if (now === "{" || now === "}") {
            tokens.push({ type: "curly", value: now });
            count++;
            continue;
        } else if (now === "#") {
            while (count < input.length && !NEWLINE.test(input[count])) {
                count++;
            };
        } else if (NEWLINE.test(now) || WHITESPACE.test(now)) {
            count++;
            continue;
        };
    };
    
    result.input = input;         // Input: String
    result.output = [...tokens];  // Output: Array<Object>
    
    // Return the 'result' object
    // We will parse this later
    return result;
};