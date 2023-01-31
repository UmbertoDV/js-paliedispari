const button = document.getElementById("button");

// let numeroRandomFunzione = randomNumber();

button.addEventListener("click", function () {
	const numeroUtente = parseInt(document.getElementById("numero").value);
	let pariDispariUente = document.getElementById("pariodisp-select").value;
	let numeroRandomFunzione = randomNumber();
	console.log(`Numero scelto da TE: ${numeroUtente}`);
	console.log(`Numero scelto dal PC: ${numeroRandomFunzione}`);
	console.log(`La somma è: ${numeroRandomFunzione + numeroUtente}`);
	pariDispariCheck(numeroRandomFunzione, numeroUtente, pariDispariUente);
});

function randomNumber() {
	const number = Math.floor(Math.random() * 5) + 1;
	return number;
}

function pariDispariCheck(num1, num2, pariodispari) {
	let sommaNumeri = num1 + num2;
	if (sommaNumeri % 2 == 0 && pariodispari == "pari") {
		console.log("hai vinto, hai scelto pari ed è uscito pari");
	} else if (sommaNumeri % 2 == 0 && pariodispari == "dispari") {
		console.log("Hai perso, hai scelto dispari ed è uscito pari");
	} else if (sommaNumeri % 2 != 0 && pariodispari == "dispari") {
		console.log("Hai vinto, hai scelto dispari ed è uscito dispari");
	}
}
