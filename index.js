function writeCards(names, event) {
    const messages = []; // Step 1: Create a new, empty array to hold the messages.
  
    // Step 2: Iterate through the input array
    for (let i = 0; i < names.length; i++) {
      // Step 3: Build the thank you message for each name
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the messages array
    }
  
    // Step 4: Return the new array
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i); // Log each number
    }
  }
  
  // Example usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  countDown(5); // Test the countDown function
  