/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){

let time = timeString.split(":"); 
let hh = parseInt(time[0]); 
let mm = parseInt(time[1]); 

  if (hh <= 12) {
    return "Good Morning"; 
  }
  else if(hh > 12 && hh < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  } 
}

function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.innerText = string; 
}
    
    
/* Write your implementation of displayMessage() */
