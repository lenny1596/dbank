import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async () => {
  // console.log("Hello, WebAssembly!");
  const currentAmount = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = currentAmount.toFixed(2);
});
