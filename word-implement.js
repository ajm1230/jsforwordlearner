
    const words = [
      { word: "Hello", meaning: "नमस्ते (Namesta) ", definition: "A respectful greeting in Hindi.", example: "नमेस्ता, कैसे है आप ? ( Hello, how are you? )" },
      { word: "Thank You", meaning: "धन्यवाद (Dhanyavaad)", definition: "Thank you in Hindi.", example: "शुक्रिया बहुत बहुत!" },
      { word: "Guest", meaning: "मेहमान (Mehmaan)", definition: "Guest in Hindi.", example: "आज हमारे घर में मेहमान आए हैं।" },
      { word: "Market", meaning: "बाजार (Bazaar)", definition: "Market in Hindi.", example: "मैंने आज बाजार से सब्जियाँ खरीदी।" },
      { word: "Attention", meaning: "ध्यान (Dhyaan)", definition: "Attention or focus in Hindi.", example: "कृपया ध्यान से सुनिए।" },
      { word: "Condition ", meaning: "हाल (Haal)", definition: "Condition or state in Hindi.", example: "आपका हाल कैसा है?" }
    ];

    let currentIndex = 0; // Initialize the index to 0 to display the first word

// Function to display the current word
    function displayWord(index) {
      document.getElementById("word").innerText = words[index].word;
      document.getElementById("meaning").innerText = "Meaning: " + words[index].meaning;
      document.getElementById("definition").innerText = "Definition: " + words[index].definition;
      document.getElementById("example").innerText = "Example: " + words[index].example;
    }

    // Function to display the next word
    function nextWord() {
      if (currentIndex === words.length) {
        alert("All words have been displayed. Resetting.");
        currentIndex = 0; // Reset the index to 0 when all words have been displayed
      }
      displayWord(currentIndex);
      currentIndex++; // Increment the index for the next word
      document.getElementById("latestWord").style.display = currentIndex === 1 ? "block" : "none"; // Show the latest word text when displaying the second word
    }

    // Function to search for a word
    function searchWord() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();
      const matchingWords = words.filter(word => word.word.toLowerCase().includes(searchTerm));
      if (matchingWords.length > 0) {
        currentIndex = words.indexOf(matchingWords[0]);
        displayWord(currentIndex);
        document.getElementById("latestWord").style.display = currentIndex === 0 ? "block" : "none"; // Show the latest word text when displaying the first word
      } else {
        document.getElementById("word").innerText = "No matching word found.";
        document.getElementById("meaning").innerText = "";
        document.getElementById("definition").innerText = "";
        document.getElementById("example").innerText = "";
        document.getElementById("latestWord").style.display = "none"; // Hide the latest word text if no matching word is found
      }
    }

    // Display the first word when the page loads
    window.onload = function() {
      displayWord(currentIndex);
      document.getElementById("latestWord").style.display = "block"; // Show the latest word text on page load
      currentIndex++; // Increment the index for the next word
    };
    
