/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let horas = time.split(':');
  let hour = parseInt(horas[0]);

  if (hour < 12) {
    return "Good Morning";
  }
  if (hour >= 12 && hour <= 17){ 
    return "Good Afternoon";
  }
  if (hour > 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  document.getElementById("greeting").innerText = greet;
}
