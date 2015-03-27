function assignTorpedo ( name, passengerArray ){
	var torpedoAssignment;


	for (var i = 0; i<passengerArray.length; i++) {
		if (passengerArray[i] == name) {
			torpedoAssignment = function ( ) {
				var j = i; //does not work
				// alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo #" + (j+1) + "!");

			};
		}
	}
	return torpedoAssignment;
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);

giveAssignment();


var myBox = {
	height: 6,
	width: 8,
	length: 10,
	volume: 720,
	material: "cardboard",
};

Object.prototype.color = "red";