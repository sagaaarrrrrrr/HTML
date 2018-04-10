
alert("connecte")
// function capitalize(str){
//   if(typeof str === "number"){
//     return ("That's not a  number");
//   }
//   return str.charAt(0).toUpperCase()+str.slice(1)
// }
//
// var city = "paris";
// var capital = capitalize(city);

function kebabToSnake(str){
  var newString =  str.replace(/[_]/g , "-" );
  return newString;
}
