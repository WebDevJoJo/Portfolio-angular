function priceCalculate() {
  const radiochecked = document.getElementById("flexRadioTypeId").checked;
  const inputs = document.getElementsByClassName("form-check-input");
  const arr = []; // Array to store the checked values
  for (let i = 0; i < inputs.length; i++) {
    // Take only those inputs which are checkbox
    if (inputs[i].checked) {
      arr.push(inputs[i].value);
    }
  }
  document.getElementById("TotText").value = arr.reduce(sumcalc);
}
function sumcalc(tot) {
  return tot;
}
