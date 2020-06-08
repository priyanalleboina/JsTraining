
function addNumbers() {
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;

var sum = add(Number(first) ,Number(second));
document.getElementById('sum').innerHTML = sum;

}

function add (first,second) {
  return first+second;
}