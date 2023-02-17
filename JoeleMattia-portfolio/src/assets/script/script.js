function eshopMethods() {
  const eshop = document.getElementById("eshop");
  const gimmemoney = document.getElementById("gimmemoney");
  if (eshop.checked) {
    gimmemoney.className = "visible";
  } else {
    gimmemoney.className = "invisible";
  }
}
function ShowUrl() {
  const switcheck = document.getElementById("flexSwitchCheckChecked");
  const url = document.getElementById("chooseurl");
  if (switcheck.checked) {
    url.className = "visible";
  } else {
    url.className = "invisible";
  }
}
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
function printmodal() {
  const modal = document.getElementById("printmodal");
  modal.className = "visible";
}
