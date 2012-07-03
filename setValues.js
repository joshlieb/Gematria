var values = gmatriya;
var menatz = "menatzpech";
var atBash = "atBash";
var koton = "koton";
var alepBais = "alepBais";

function setValues ()
{
	menatz = $("#menatzpech").is(":checked");
	atBash = $("#atBash").is(":checked");
	koton = $("#koton").is(":checked");
	alepBais = $("#alepBais").is(":checked");
	if (alepBais === true && koton === false)
		{
			values = gmatriya;
			$("#gematriaType").html('א, ב.');
		}
	if (alepBais === true && koton === true)
		{
			values = gmatriyaKoton;
			$("#gematriaType").html('מספר קטן.');
		}
	if (menatz === true && koton === false) 
		{
			values = gmatriyaMnats;
			$("#gematriaType").html('מנצפ"ך.');
		}
	if (menatz === true && koton === true) 
		{
			values = gmatriyaMnatsWithKoton;
			$("#gematriaType").html('מנצפ"ך און מספר קטן.');
		}
	if (atBash === true && koton === false) 
		{
			values = gmatriyaAtBash;
			$("#gematriaType").html('א"ת ב"ש.');
		}
	if (atBash === true && koton === true)
		{
			values = gmatriyaAtBashWithKoton;
			$("#gematriaType").html('א"ת ב"ש מיט מספר קטן.');
		}
}

$("#alepBais").prop("checked", true);
$("#input").focus();

$("#clear").click( function () {
	$("#input").val("").focus();
	$("#total").html("");
	$("#result").val("");
	$("#alepBais").prop("checked", true);
	$("#koton").prop("checked", false);
});

$("input").click(setValues);
$("button").click(setValues);

