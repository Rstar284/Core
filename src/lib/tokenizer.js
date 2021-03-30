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
        // ...
    };
    
    result.input = input;         // Input: String
    result.output = [...tokens];  // Output: Array<Object>
    
    // Return the 'result' object
    // We will parse this later
    return result;
};