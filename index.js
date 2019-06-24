/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

let greet = function(time) {
  let parsedTime = time.split(":")[0]
  if (parsedTime > 17) {
    return "Good Evening"
  } else if (parsedTime < 12) {
    return "Good Morning"
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */

let displayMessage = function(str) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = str
}
