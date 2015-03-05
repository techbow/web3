$(document).ready(function(){

	var lowestPrice = Infinity;
	var ul_list = "";
	var index = 0;
	for (var i = 0; i <= 15; i++) {

		price = $("li#result_" + i +" span.a-size-base").html();
		if (price) {
			price= price.slice(1);
			//remove"," and convert to number
			price = Number(price.replace(/,/g, ""));

			if (price < lowestPrice) {
				lowestPrice = price;
				ul_list = $("li#result_" + i);
				index = i;
				// console.log(price);
				// console.log(lowestPrice);
			}
		}
	}
	$("ul#s-results-list-atf").prepend(ul_list);
	var newtitle = "Cheapest One: " + $("li#result_" + index + " h2.a-size-medium").html();
	$("li#result_" + index + " h2.a-size-medium").html(newtitle);

});