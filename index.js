/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let current_time = time.split(':')
  if (parseInt(current_time[0]) < 12) {
    return "Good Morning";
  } else if ((parseInt(current_time[0]) > 12) && (parseInt(current_time[0]) < 17)) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
function displayMessage(message) {
  document.querySelector("#greeting").innerText = message
}