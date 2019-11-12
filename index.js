/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  timeString = timeString.split(':')[0]
  const time = parseInt(timeString)

  if (time < 12 ) {
    return "Good Morning"
  } else if ( time > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

/* from Learn.co answer */
  // const hour = parseInt(timeStr, 10);
  // if ( hour < 12) return "Good Morning"
  // if ( hour > 17) return "Good Evening"
  // return "Good Afternoon"