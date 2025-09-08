document.getElementById("convertBtn").addEventListener("click", () => {
  const inputNumber = document.getElementById("inputNumber").value.trim();
  const fromBase = parseInt(document.getElementById("fromBase").value);
  const toBase = parseInt(document.getElementById("toBase").value);
  const resultElement = document.getElementById("result");

  try {
    if (!inputNumber) {
      resultElement.textContent = "⚠️ Please enter a number.";
      return;
    }

    // Convert input to decimal
    const decimalValue = parseInt(inputNumber, fromBase);
    if (isNaN(decimalValue)) {
      resultElement.textContent = "⚠️ Invalid number for the chosen base.";
      return;
    }

    // Convert decimal to target base
    const convertedValue = decimalValue.toString(toBase).toUpperCase();

    resultElement.textContent = convertedValue;
  } catch (error) {
    resultElement.textContent = "❌ Error converting number.";
  }
});
