
//AJAX CALL FOR EXCHANGE RATES
$.ajax({
	url: "http://api.fixer.io/latest",
	method: 'GET',
  }).done(function(result) {



	var output = Object.keys(result.rates)
	.map(function(key){
		return { country: key, rate: result.rates[key]};
	});


			var fromDiv = document.getElementById("from");

			var fromselectList = document.createElement("select");
			fromselectList.id = "fromSelect";
			fromDiv.appendChild(fromselectList);


			for (var i = 0; i < output.length; i++) {
				var option = document.createElement("option");
				option.value = output[i].rate;
				option.text = output[i].country;
				fromselectList.appendChild(option);
			}




			var toDiv = document.getElementById("to");

			var toselectList = document.createElement("select");
			toselectList.id = "toSelect";
			toDiv.appendChild(toselectList);

			for (var i = 0; i < output.length; i++) {
				var option = document.createElement("option");
				option.value = output[i].rate;
				option.text = output[i].country;
				toselectList.appendChild(option);
			}

			var euro = document.createElement("euro");
			euro.value = 1;
			euro.text = "EUR";
			toselectList.appendChild(euro);




  }).fail(function(err) {
	throw err;
  });



  // CALCULATE CONVERTED VALUE ON CLICK OF BUTTON

  document.getElementById("calculateButton").onclick = myFunction();

   function myFunction() {
		var fromCurrency = document.getElementById("fromSelect").value;
		var toCurrency = document.getElementById("toSelect").value;
		var toConvertAmount = document.getElementById("toConvert").value;
		var converted= toConvertAmount /fromCurrency *toCurrency;

	document.getElementById("convertedValue").innerHTML = converted.toFixed(2);
}