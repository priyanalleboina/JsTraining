import mathLibrary from './mathlibrary';

export function getArithmetic() {
  const num1: any = document.getElementById('num1');
  const num2: any = document.getElementById('num2');

  const result :any  = document.getElementById('error');
  const val1: number = Number(num1.value); //explicit number conversion
  const val2: number = Number(num2.value); //explicit number conversion
  if (!mathLibrary.validate(num1, num2)) {
    result.innerHTML = "Invalid numbers";
    return;
  }
  
  document.getElementById('sumResult').innerHTML = String(mathLibrary.add(val1, val2)); //implicit conversion to string here
  document.getElementById('mulResult').innerHTML = mathLibrary.multiplication(val1, val2);
  document.getElementById('subResult').innerHTML = mathLibrary.subtraction(val1, val2);
  document.getElementById('divResult').innerHTML = String(mathLibrary.division(val1, val2)); //implicit conversion to string here
}