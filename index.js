/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let num = string.split(":")[0];
  let int_time = parseInt(num);

if( int_time < 12 ){
return "Good Morning";
}else if (int_time >12 && int_time < 17 ) {
return "Good Afternoon";
}else {
  return "Good Evening"
}

}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.querySelector("#greeting").innerText = string;

}
