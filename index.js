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
  const nameEl = document.getElementById("name");
  const dateEl = document.getElementById("date");
  const amountEl = document.getElementById("amount");
  const submit = document.getElementById("submit");

  nameEl.focus();

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    addExpense();
  });

  function addExpense() {
    const name = nameEl.value;
    const date = dateEl.value;
    const amount = amountEl.value;
    const table = document.getElementById("table");

    //Remove placeholder row
    document.getElementById("noExpenseRow").style.display = "none";
    // Insert a new row at the end of the table
    const newRow = table.insertRow();

    // Insert new cells in the new row
    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const amountCell = newRow.insertCell(2);
    const deleteCell = newRow.insertCell(3);
    //Add content to cells
    nameCell.textContent = name;
    dateCell.textContent = date;
    amountCell.textContent = amount;

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete");
    deleteCell.appendChild(deleteButton);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
      table.deleteRow(newRow.rowIndex);
    });
    //remove content from form

    nameEl.value = null;
    amountEl.value = null;
    dateEl.value = null;

    //Focus on name

    nameEl.focus();
  }
  //note taker
});
