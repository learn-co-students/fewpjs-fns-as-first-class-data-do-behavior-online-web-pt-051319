/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
	if(getTime(time) < 12) return 'Good Morning';
	if(getTime(time) < 17) return 'Good Afternoon';
	return 'Good Evening';
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
	document.getElementById('greeting').innerText = message;
}

getTime = (timeStr) => {
	let t = timeStr.split(':')
	return parseInt(t[0]) + parseInt(t[1])/60
}