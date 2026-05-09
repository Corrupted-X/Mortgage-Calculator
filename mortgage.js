/*Mortgage JavaScript*/


/*Validate Price Value*/
function priceValue(price)
{
	let txt = document.getElementById(price).value;

	if (txt.includes("$") || txt.includes(",") || txt.length < 1)
		return price + " cannot be blank or include '$' or ','\n";
	else
		return "";
}

/*Validate down payment Value*/
function paymentValue(downpayment)
{
	let txt = document.getElementById(downpayment).value;

	if (txt.includes("%") || txt.length < 1)
		return downpayment + " cannot be blank or include '%'\n";
	else
		return "";
}

/*Validate Term Value*/
function dropdown(term)
{
	let ndx = document.getElementById(term).selectedIndex;

	if (ndx == 0 || ndx == -1)
		return "No " + term + " option selected\n";
	else
		return "";
}

/*Validate Slider Validate*/
function sliderValidate(rate)
{
	let elem = document.getElementById(rate).value;
	if (elem == -1)
		return "No " + rate + " option selected\n";
	else
		return "";
}

/*Slider Value*/
function sliderValue(rate)
{
	let elem = document.getElementById(rate);
	let num = Number(elem.value);
	console.log(num);

	if (num < 1.00)//Logic Case: Ensure value is never smaller than 0
	{
		num = 1.00;
		elem.value = "1.00";
	}
	if (num > 15.00)//Logic Case: Ensure value is never greater than 255
	{
		num = 15.00;
		elem.value = "15.00";
	}

	if (num.length < 1)
	{
		num = 1 + num;
	}

	return num;
}

/*Slider*/
function slider(rate)
{
	let R = sliderValue('rate');
	let ratelegend = document.getElementById("ratevalue");

	ratelegend.innerHTML = R + "%";
}




/*Main*/
function compute()
{
	validate();
	let cost = Number(document.getElementById("price").value);
	let down = Number(document.getElementById("downpayment").value);
	let years = Number(document.getElementById("term").value);
	let interest = Number(document.getElementById("rate").value);
	
	down = cost * (down / 100);
	interest = interest / 100;
	let r = interest / 12;
	let n = years * 12;

	let mortgage = (cost - down) * (r / (1 - ((1 + r) ** (-n))));
	console.log(mortgage);

	document.getElementById("amount").value = "$" + mortgage.toFixed(2); 
}

/*Validate*/
function validate()
{
	let msg = priceValue('price');
	msg += paymentValue('downpayment');
	msg += dropdown('term');
	msg += sliderValidate('rate');


	if (msg.length > 0) {
		alert(msg);
		return false;
	}
	else
		return true;
}