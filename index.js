/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(greet_messge) {
  document.getElementById('greeting').innerText = greet_messge
}

function greet(timeStr) {
  let splitTime = timeStr.split(":")
  let hour = parseInt(splitTime[0])
  
  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}


