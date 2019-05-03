var COINVALUES = [100, 25, 10, 5, 1];
var COINLABELS = ["Dollars", "Quarters", "Dimes", "Nickels", "Pennies"];

var coinsInput, totalCents, coinCollection = [0, 0, 0, 0, 0];

document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
	coinsInput = document.getElementById("coinInput").value;
	if (!isNaN(coinsInput)) {
		coinCollection[0] = Math.floor(coinsInput);
		document.getElementById("coinOutput").innerHTML = 
			"<p>" + COINLABELS[0] + ": " + coinCollection[0] + "</p>";
		totalCents = ((coinsInput - coinCollection[0]).toFixed(2))*100;
		
		for(i=1; i < coinCollection.length; i++) {
			coinCollection[i] = Math.floor(totalCents/COINVALUES[i]);
			totalCents = totalCents - coinCollection[i]*COINVALUES[i];
			document.getElementById("coinOutput").innerHTML += 
				"<p>" + COINLABELS[i] + ": " + coinCollection[i] + "</p>";
		}

	} else {
		alert("Please type only a number in the box.");
	}
}