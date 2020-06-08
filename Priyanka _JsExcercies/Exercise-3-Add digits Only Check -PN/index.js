
function addNumbers() {
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;

  var sum = document.getElementById('sum');
  
 if( isNaN(Number(first)) || isNaN (Number(second))){
   sum.innerHTML = "Please enter number only ";
   return;
 }
 var result = Number(first) + Number(second);
  sum.innerHTML = result;
}