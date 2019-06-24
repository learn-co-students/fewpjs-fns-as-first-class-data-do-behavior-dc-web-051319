/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeOfDay) {
  if (timeOfDay < "12:00") {
    return "Good Morning";
  } 
  if (timeOfDay >= "12:00" && timeOfDay <= "17:00") {
    return "Good Afternoon";
  }
  if (timeOfDay > "17:00") {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
