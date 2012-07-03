var myString;
function results()
{
	var temp =	$("#input").val();
	myString = "";
	var total = 0;

	for ( var i = 0; i < temp.length; i++ )
	{
		var character = temp.charAt(i);
		toUpperCase = character.toUpperCase();

		if (values[character]) 
		{
			myString += character;
			total += values[character];
		}
		else if (character === " ")
		{
			myString += " ";
		}
		else if (englishToHebrew[toUpperCase])
		{
			character = englishToHebrew[toUpperCase];
			myString += character;
			total += values[character];
		}
		else if (character === "'" || character === '"' || character === ",")
		{
			myString += character;
		}
	}
	$("#input").val(myString);
	$("#total").html(total);
};

$("input").click(results);
$("#input").keyup(results);