var myString = "";
var input = $("#input");
var total = 0;

function convert (e) {
	var cursorPostition = this.selectionStart;
	var character = String.fromCharCode(e.charCode);
	var toUpperCase = character.toUpperCase();

	if (values[character])
	{
		this.setRangeText(character);
		this.setSelectionRange(++cursorPostition, cursorPostition);
	}

	else if (character === " ")
	{
		this.setRangeText(character);
		this.setSelectionRange(++cursorPostition, cursorPostition);
	}

	else if (englishToHebrew[toUpperCase])
	{
		character = englishToHebrew[toUpperCase];

		this.setRangeText(character);
		this.setSelectionRange(++cursorPostition, cursorPostition);
	}

	results();

	return false;
}

function results(num)
{
	var i = 0,
		val = input.val(),
		len = val.length;

	total = 0;

	for ( ; i < len; i++) {
		total += values[val[i]];
	}

	$("#total").html(total);
};

input.keypress(convert);
