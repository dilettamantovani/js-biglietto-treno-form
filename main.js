
let button = document.getElementById("calcBtn");
let priceOutput = document.getElementById("priceOutput");
let nameOutput = document.getElementById("nameOutput");
let ageDiscount = document.getElementById("ageDiscount");

button.addEventListener("click", function () {
  let passengerName = document.getElementById("passengerName").value;
  let distance = document.getElementById("distance").value;
  let ageGroup = document.getElementById("ageGroup").value;

  console.log("Nome:", passengerName);
  console.log("Distanza:", distance);
  console.log("Età:", ageGroup);

  nameOutput.innerHTML = passengerName;

  let priceKm = distance * 0.21;
  let finalPrice = priceKm;
  console.log("prezzo di base " + finalPrice);


  if (ageGroup == "u_18") {
    finalPrice -= finalPrice * 0.20;
    ageDiscount.innerHTML = "Biglietto U18";
  }
  else if (ageGroup == "adult") {
    finalPrice = finalPrice;
  }

  else if (ageGroup == "o_65") {
    finalPrice -= finalPrice * 0.40;
    ageDiscount.innerHTML = "Biglietto Over 65";
  }

  priceOutput.innerHTML = finalPrice.toFixed(2) + "€"

  console.log("prezzo finale", finalPrice.toFixed(2));

});