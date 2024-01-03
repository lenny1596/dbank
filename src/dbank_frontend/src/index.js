import { dbank_backend } from "../../declarations/dbank_backend";


// Displays the current balance at the top of page.
window.addEventListener("load", async () => {
  // console.log("Hello, WebAssembly!");
  update();
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  // console.log("submitted.");

  const button = event.target.querySelector("#submit-btn");

  /* Get hold of the value added to both topUp & withdraw input elements.
     Used parseFloat to convert the values because the func. parameters accept value in float64 format.
  */
  const topupAmount = parseFloat(document.getElementById("topup-amount").value);
  const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  
  button.setAttribute("disabled", true);

  // only call topUp func. if value input is more than zero.
  if (document.getElementById("topup-amount").value.length != 0) {
    await dbank_backend.topUp(topupAmount);    
  }

  // only call withDraw func. if value input is more than zero.
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank_backend.withDraw(withdrawalAmount);
  }

  update();
  
  // reset input values and btn to blank and enabled respectively.
  document.getElementById("topup-amount").value="";
  document.getElementById("withdrawal-amount").value="";
  button.removeAttribute("disabled");
});


// async func. to check current/updated balance.
async function update() {
  const currentAmount = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = currentAmount.toFixed(2);
}
