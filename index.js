/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let hour = time.split(":")
  if (hour[0] < 12) {
    return "Good Morning"
  } else if (hour[0] >= 12 && hour[0] <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  greeting = document.getElementById("greeting")
  greeting.innerText = string;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
