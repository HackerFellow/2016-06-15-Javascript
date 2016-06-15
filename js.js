function convertToCelsius(f){
	return (f-32)*5/9;
}
function convertTemp(temp,targetUnit){
	if(temp === ""){
		alert("try again");
		return;
	}
	return targetUnit=="C"|targetUnit=="c" ? temp*9/5+32 : (temp-32)*5/9;
}

$( "#c" ).bind( "click", function() {
	$("#result").text(convertTemp($("#input").val(),"f"));
});
$( "#f" ).bind( "click", function() {
	$("#result").text(convertTemp($("#input").val(),"c"));
});
