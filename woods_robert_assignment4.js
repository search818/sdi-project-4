alert("JavaScript works!");
//Robert Woods
//12-12-12 
//SDI 1211 
//Project 4 Library

/* 
1. Does a string follow a 123-456-7890 pattern like a phone number?
*/
var phoneNumber = "123-456-7890",
	areaEnd = phoneNumber.indexOf("-"),
	start = phoneNumber.indexOf("-")+1,
	end = phoneNumber.length;
var verifyPhone = function(area, number) {
	var outputNumber = area + number;
		return outputNumber; 
	};
		if (phoneNumberOut = verifyPhone(phoneNumber.substring(0,areaEnd), phoneNumber.substring(start,end))) {
			console.log(true); 
		} else { console.log(false); };

