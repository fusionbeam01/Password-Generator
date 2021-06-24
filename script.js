// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a","b","c","d","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","F","G","H","I","J","K","l","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&",];
// Use math.random with the lenght of an aray
// Write password to the #password input
function writePassword() {

  var passlenght = prompt("Enter size of your password between 8-100");

  let x = passlenght;
  var passarray = [0];
  var lenght = passlenght(x,10);

  if (x >= 8 && x <= 100){
    var ConLow = confirm("Confirm lower case character");
    console.log(ConLow);
    passarray = passarray.concat(lower);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
