import mathLibrary from './mathlibrary';

export function getArithmetic() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');

  var result = document.getElementById('error');
  num1 = Number(num1.value); //explicit number conversion
  num2 = Number(num2.value); //explicit number conversion
  if (!mathLibrary.validate(num1, num2)) {
    result.innerHTML = "Invalid numbers";
    return;
  }
  
  document.getElementById('sumResult').innerHTML = mathLibrary.add(num1, num2); //implicit conversion to string here
  document.getElementById('mulResult').innerHTML = mathLibrary.multiplication(num1, num2);
  document.getElementById('subResult').innerHTML = mathLibrary.subtraction(num1, num2);
  document.getElementById('divResult').innerHTML = mathLibrary.division(num1, num2); //implicit conversion to string here
}