function calculateDoubleAnnuity() {
	var varRate = $('#double-annuity-input').val();
	var wkRate = parseFloat(varRate)
	var wkYears = 72 / wkRate
	var result = parseFloat(wkYears.toFixed(1)) + ' year';
	if (parseFloat(wkYears.toFixed(1)) > 1) result += 's';

	$('#double-annuity-result').addClass('animating');
	setTimeout(function() {
		$('#double-annuity-result').removeClass('animating').html(result);
	}, 300);
}

$(document).ready(function() {
	// =====================================
	// Wacth and update Annuity Form
	// =====================================
	$('#double-annuity-input').change(function() {
		calculateDoubleAnnuity();
	}).keyup(function() {
		calculateDoubleAnnuity();
	});

	$('#double-annuity-slider').on('moved.zf.slider', function() {
	  calculateDoubleAnnuity();
	});

	$('#double-annuity-refresh').on('click', function() {
		calculateDoubleAnnuity();
	});
});

function calculateDoubleCD() {
	var varRateCD = $('#cd-interest-rate-input').val();
	var varBracketCD = $('#tax-bracket-input').val();
	var wkRateCD = parseFloat(varRateCD);
	var wkBracketCD = parseInt(varBracketCD);
	var wkYears = parseFloat(72 / ((100 - wkBracketCD) * (wkRateCD / 100)))

	var result = parseFloat(wkYears.toFixed(1)) + ' year';
	if (parseFloat(wkYears.toFixed(1)) > 1) result += 's';

	$('#double-cd-result').addClass('animating');
	setTimeout(function() {
		$('#double-cd-result').removeClass('animating').html(result);
	}, 300);
}

$(document).ready(function() {
	// =====================================
	// Wacth and update CD Form
	// =====================================
	$('#cd-interest-rate-input').change(function() {
		calculateDoubleCD();
	}).keyup(function() {
		calculateDoubleCD();
	});

	$('#cd-interest-rate-slider').on('moved.zf.slider', function() {
		calculateDoubleCD();
	});

	$('#tax-bracket-input').change(function() {
		calculateDoubleCD();
	}).keyup(function() {
		calculateDoubleCD();
	});

	$('#tax-bracket-slider').on('moved.zf.slider', function() {
	  calculateDoubleCD();
	});

	$('#double-cd-refresh').on('click', function() {
		calculateDoubleCD();
	});
});

function format (expr, decplaces) {
	// raise incoming value by power of 10 times the
	// number of decimal places; round to an integer; convert to string
	var str = "" + Math.round (eval(expr) * Math.pow(10, decplaces));

	// pad small value strings with zeros to the left of the rounded number
	while (str.length <= decplaces) {
		str = "0" + str;
	}

	// establish location of decimal point
	var decpoint = str.length - decplaces;

	// assemble final result from (a) the string up to the position of
	// the decimal point; (b) the decimal point; and (c) the balance
	// of the string.  Return finished product.
	return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);

}

// turn incoming expression into a formatted value
function dollarize (expr) {
	return format(expr,2);
}

function calculateEquivalentYield() {
	var varRateY = $('#yield-interest-rate-input').val();
	var varBracketY = $('#yield-tax-bracket-input').val();
	var wkRateY = parseFloat(varRateY);
	var wkBracketY = parseInt(varBracketY);
	wkBracketY = 100 - parseInt(varBracketY);
	var wkYield = parseFloat((wkRateY / wkBracketY) * 100)
	wkYield = dollarize(wkYield);

	var result = wkYield;
	$('#yield-result').addClass('animating');
	setTimeout(function() {
		$('#yield-result').removeClass('animating').html(result);
	}, 300);
}

$(document).ready(function() {
	// =====================================
	// Wacth and update CD Form
	// =====================================
	$('#yield-interest-rate-input').change(function() {
		calculateEquivalentYield();
	}).keyup(function() {
		calculateEquivalentYield();
	});

	$('#yield-interest-rate-slider').on('moved.zf.slider', function() {
		calculateEquivalentYield();
	});

	$('#yield-tax-bracket-input').change(function() {
		calculateEquivalentYield();
	}).keyup(function() {
		calculateEquivalentYield();
	});

	$('#yield-tax-bracket-slider').on('moved.zf.slider', function() {
		calculateEquivalentYield();
	});

	$('#equivalent-yield-refresh').on('click', function() {
		calculateEquivalentYield();
	});
});
