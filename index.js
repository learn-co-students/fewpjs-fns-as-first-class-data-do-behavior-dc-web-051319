/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
    switch (true) {
        case string.slice(0,2) > (12 + 5):
            return 'Good Evening';
            break;
        case string.slice(0,2) >= 12 && string.slice(0,2) <= (12 + 5):
            return 'Good Afternoon'
            break;
        case string.slice(0,1) < 12:
            return 'Good Morning';
            break;
    };
};
/* Write your implementation of displayMessage() */
function displayMessage(string) {
    let loc = document.getElementById("greeting");
    loc.innerText = string;
};