// Vowel Counter
document.addEventListener("DOMContentLoaded", function () {
  const countVowelsButton = document.getElementById("count-vowels");
  const textInput = document.getElementById("text-input");
  const vowelResult = document.getElementById("vowel-result");

  countVowelsButton.addEventListener("click", function () {
    const text = textInput.value;
    const vowelCount = countVowels(text);
    if (vowelCount === 0) {
      alert("No vowels detected, try again.");
    } else {
      vowelResult.textContent = `Number of vowels: ${vowelCount}`;
    }
  });

  function countVowels(text) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (let char of text) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  // expense tracker

  //note taker
});
