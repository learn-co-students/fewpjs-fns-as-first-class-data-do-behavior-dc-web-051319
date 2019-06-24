/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
timeString = "8:40"

function greet(timeString) {
  let hour = parseInt(timeString.split(':')[0])

  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

greet(timeString)

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = `${string}`
}