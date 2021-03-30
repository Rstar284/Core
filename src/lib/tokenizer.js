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
        let now = input[count];
        
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
        } else if (now === "'") {
            const val = [];
            now = input[++count];
            
            while (now !== "'") {
                val.push(now);
                now = input[++count];
            };
            
            now = input[++count];
            
            tokens.push({ type: "string", value: val.join("") });
            continue;
        } else if (now === '"') {
            const val = [];
            now = input[++count];
            
            while (now !== '"') {
                val.push(now);
                now = input[++count];
            };
            
            now = input[++count];
            
            tokens.push({ type: "string", value: val.join("") });
            continue;
        } else if (now === "#") {
            while (count < input.length && !NEWLINE.test(input[count])) {
                count++;
            };
        } else if (NEWLINE.test(now) || WHITESPACE.test(now)) {
            count++;
            continue;
        } else if (NUMBER.test(now)) {
            const val = [];
            
            while (NUMBER.test(now)) {
                val.push(now)
                now = input[++count];
            };
            
            tokens.push({ type: "number", value: val.join("") });
        } else if (LETTER.test(now) || now === "_") {
            let val = now;
            
            if (++count < input.length) {
                now = input[count];
                
                while ((LETTER.test(now) || NUMBER.test(now) || now === "_") && (count + 1 <= input.length)) {
                    val += now;
                    now = input[++count];
                };
            };
            
            tokens.push({ type: "name", value: val });
            continue;
        } else {
            throw new Error("'" + now + "' is not a recognized token");
        }
    };
    
    result.input = input;         // Input: String
    result.output = [...tokens];  // Output: Array<Object>
    
    // Return the 'result' object
    // We will parse this later
    return result;
};