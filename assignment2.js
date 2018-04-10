// var age = prompt("Your age");
// var days = (age * 365 );
// alert("Your age is " + age + " and days are " + days);

var age = prompt("What is your age?");

if (age < 0){
  console.log("Error message")
}

else if(age ==21){
  console.log("happy 21st birthday!!")
}

else if(age%2 == 1){
  console.log("age is odd")
}

else if( age % Math.sqrt(age)=== 0){
  console.log("perfect square")
}
