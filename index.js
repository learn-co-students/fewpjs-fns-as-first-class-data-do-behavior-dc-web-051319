/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  if (time >= "12:00" && time <= "15:00") {
    return "Good Afternoon";
  }else if (time > "15:00" && time<="24:00"){
    return "Good Evening";    
  }else{
    return "Good Morning";
  }
}

function displayMessage(string){
  const greet = document.getElementById("greeting");
  greet.innerText = string;
}

/* Write your implementation of displayMessage() */
