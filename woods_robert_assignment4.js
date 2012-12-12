alert("JavaScript works!");
//Robert Woods
//12-12-12 
//SDI 1211 
//Project 4 Library

 
//1. Does a string follow a 123-456-7890 pattern like a phone number?

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
			} else { 
				console.log(false); 
};
		
//2. Does a string follow an aaa@bbb.ccc pattern like an email address?

	var email = "search818@gmail.com",
		userName = email.indexOf("@"), 
		siteUrl = email.indexOf("@"),
		end = email.length; 
	var checkEmail = function(user, emailUrl) {
		var validateEmail = user + emailUrl;
			return validateEmail;
	};
			if (emailOutput = checkEmail(email.substring(0,userName),email.substring(siteUrl,end))) { 
				console.log(true); 
			} else { 
				console.log(false); 
};
				
//3. Is the string a URL? (Does it start with http: or https:?)

	var url = "https://www.anysite.com",
		checkUrl = function(http, url) {
		var validateUrl = http + url;
			return validateUrl;
	};
			if (urlOutput = checkUrl(url.substring(0,url.lastIndexOf("/")), url.substring(url.lastIndexOf("/"), url.length))) { 
				console.log(true); // If true string will display the site url
			} else { 
				console.log(false); };
	var httpCheck = url.substring(0, url.lastIndexOf("/"));
			if (httpCheck.length > 6) { // Displays whether the url is http or https
				console.log("URL begins with: https");
			} else { 
				console.log("URL begins with: http"); 
};
 
//4. Given a string version of a number such as "50", return the value as an actual Number, such as 50

	var checkNumber = function(number) {
		var validateNumber = number;
			return validateNumber;
	};
			if (numberOutput = parseFloat(checkNumber("50")) === 50) { // parseFloat changes the string to a int 
				console.log(true); // displays true if converted to number and equals 50
			} else { 
				console.log(false); 
};
 
//5. Format a number to use a specific number of decimal places as for money: 2.1->2.10.

	function amount(total){
		var myCost = total.toFixed(2);
			return myCost;
	};
				console.log("$" + amount(2.1));

//6. This function capitalizes 1st letter of each word.    
    
    var capitalize = function(sentence){
         var chopped = sentence.split(" ");
         	var capped = [ ];      
         
        for(i=0;chopped.length > i; i++){
        	upper = chopped[i].charAt(0).toUpperCase() + chopped[i].slice(1);
            
          	capped.push(upper);    
    }
       		return capped.join(" ");
};
		

		


