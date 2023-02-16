function priceCalculate() {
  const inputs = document.getElementsByClassName("form-check-input");
  const arr = []; // Array to store the checked values
  const mytext = document.getElementById("TotText");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      arr.push(parseInt(inputs[i].value));
    }
  }
  mytext.className = "visible";
  mytext.value =
    "It will cost € " +
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
