/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const timeInt = parseInt(time.split(":", 1));
  if ( timeInt < 12 )  {
    return `Good Morning`;
  } else if ( timeInt > 17 ) {
    return `Good Evening`;
  } else {
    return `Good Afternoon`;
  } 
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg;
}