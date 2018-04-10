// Simple Guss game

number = 10;
var guss = prompt("Guss a number?");

sagar = Number(guss)

// compare the input no with pre-defind number
if (number === sagar){
  alert("You Gussed it write!!")
}
 
else if(sagar < number){
  alert("Too low try again")
}

else if(sagar > number){
  alert("Too high try again")
}
