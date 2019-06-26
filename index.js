function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
    let hour = parseInt(time, 10)
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return "Good Evening"
}

function displayMessage(msg) {
    document.getElementById('greeting').innerText = msg;
}
