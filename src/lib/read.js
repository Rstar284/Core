/* read.js */

// Import the 'readFileSync' function
import { readFileSync } from "fs";

// Export the 'read' function
export function read(source = "") {
    // Define 'result';
    let result;
    
    // We checl if the 'source' ends with our extension
    if (!source.endsWith(".core")) throw new Error("File must end with '.core'");
    
    // Try to read the file
    try {
        result = readFileSync(source).toString();
    } catch (err) {
        if (err) throw err;
    };
    
    // Return the file content
    return result;
};