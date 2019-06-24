/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".

/* Write your implementation of greet() */

 function greet(time){
  text = parseInt(time.split(":")[0])
  if (text < 12){
    return "Good Morning"
  }
  else if (17 > text && text >= 12){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
 }

 console.log(greet("10:00"))
/* Write your implementation of displayMessage() */
// The displayMessage function should take one argument, a String.
// When the function runs it should update the text inside the #greeting node with the content of the first argument.
// It does not return anything.

function displayMessage(greet) {
  let here = document.getElementById("greeting")
  here.innerText = greet
}