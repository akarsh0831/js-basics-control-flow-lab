function scuberGreetingForFeet(variable) {
  if (variable <= 400) {
    return 'This one is on me!';
  }
  if (variable > 2000 && variable <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  if (variable > 2500) {
    return 'No can do.';
  }// Write your code here!
}


function ternaryCheckCity(string) {
  if (string == 'NYC') {
    return 'Ok, sounds good.';
  }
  if (string == 'Pittsburgh') {
    return 'No go.';
  }
  // Write your code here!
}

function switchOnCharmFromTip(string) {
  let message;
  switch(string) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
 } 
 return message;// Write your code here!
}


