/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}




// <!-- 
// **NOTE:** The value returned from the `<input>` will be of type `String`.
// You’ll need to take the `String` of the 24 hour time and covert it to a number.
// The `split()` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
// and the `parseInt()` [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) should help.
//  -->

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


// <!-- - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".
//  -->




function greet(string) {

	let hour = string.split(":")

	let hours = parseInt(hour[0]) 

	console.log(hours)


	if(hours < 12) {
		return console.log("Good Morning")
	}

	if (12 < hours && hours < 17) {

		return console.log("Good Afternoon")
	}

	if (17 < hours && hours < 24) {

		return console.log("Good Evening")
	}

}


function displayMessage(string){

	console.log("Displaying")

}