/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(number) {
  const clock = parseInt(number);
  if (clock < 12) return "Good Morning"
  if (clock > 17) return "Good Evening"
  return "Good Afternoon" 
}


/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}