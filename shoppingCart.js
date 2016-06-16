

var items = [
	{name: "Apple", price: 42.42},
	{name: "Apple1", price: 4.42},
	{name: "Apple2", price: 442},
	{name: "Apple3", price: 424},
	{name: "Apple4", price: 42.2},
	{name: "Apple5", price: 4242},
	{name: "Apple6", price: 4.42}
	];


$("#total").val(0);
items.forEach(function(item,id){
	//Put each item in buyable state
	//First, create the container, fill it with info, and append
	$( "<button/>", {
		type: "button",
		text: "Add to Cart",
		value: id,
		click: function() {
			$( "<button/>", {
				type: "button",
				text: "Remove From Cart",
				value: id,
				click: function() {
					$("#total").val(Number($("#total").val()) - items[this.value].price);
					this.parentNode.remove();
				}//End remobve button function
			}).appendTo($( "<div/>", {
				"class": "flex-item",
				text: item.name + ": " + item.price
			}).appendTo("#cart"));
			$("#total").val(Number($("#total").val()) + items[this.value].price);
		}//END add button function
	}).appendTo($( "<div/>", {
		"class": "flex-item",
		text: item.name + ": " + item.price
	}).appendTo("#itemsToBuy"));
});