
function getValidArray(inputList) {
  let numbers = inputList.trim(); //Good Practice not to tamper input letiable from function
  //if it is string?
  numbers = numbers.split(' '); 
  if (!(numbers instanceof Array)) {
    return [];
  }
  
  //make sure we get only numbers
  numbers = numbers.filter(function(number) {   // ==> Use of filter to reduce array elements for numbers only
    return !isNaN(number); 
  });

  numbers = numbers.map(function(number) {   //==> convert every element to number equivalent
    return Number(number);
  });

  return numbers;
}

function isPrime(number) {
  for(let i = 2; i <= number/2; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimes() {
  let num1 = document.getElementById('arr1');
  //get the array of numbers
  let inputList = getValidArray(num1.value);
  if (inputList.length > 0) {
    inputList = inputList.filter(isPrime);   //Function is defined outside
  }
  //make resulting array as single text for display
  let result = inputList.join(' ');

  let primeResultElement = document.getElementById('primeList');
  primeResultElement.innerHTML = result;
}

function sortNumbers(a, b) {
  return a-b;
}
function getSecondSmallest() {
  let num1 = document.getElementById('arr1');
  //get the array of numbers
  let inputList = getValidArray(num1.value);
  let result = "";
  if (inputList.length > 1) {
    inputList = inputList.sort(sortNumbers);  //sort to get the numbers in order
    result = inputList[1];
  } else {
    result = inputList.length ? inputList[0] : Number.MIN_VALUE;
  }

  let primeResultElement = document.getElementById('smallResult');
  primeResultElement.innerHTML = result;
}

//pp
function getProd() {
  let num1 = document.getElementById('arr1');
   num1 = num1.value;
   let numbers =[];
  let inputList = num1.split(' ');
  let k = 0;
  for(let i = 0 ; i < inputList.length-1;i++) {
        numbers[i] = Number(inputList[i]);
      
  }
  console.log(numbers[0]);
  let prodResult1 = numbers.reduce(function(prod, val){ return prod * val; },1);
  console.log(prodResult);
  let  prodResultElement = document.getElementById('prodResult');
       prodResultElement.innerHTML = prodResult1 ;
}
 
//odd
function getOdd() {
  let num1 = document.getElementById('arr1');
   num1 = num1.value;
   let nums =[];
  let inputList = num1.split(' ');
  for(let i = 0 ; i < inputList.length;i++) {
        nums[i] = Number(inputList[i]);
  }
  let oddresult = nums.filter(function(x){
       return x % 2 !=0;
  } );
 
  let oddResultElement = document.getElementById('oddResult');
     oddResultElement.innerHTML = oddresult ;
}
//second 
function getSecondSmallest() {
  let num1 = document.getElementById('arr1');
   num1 = num1.value;
   let nums =[];
  let inputList = num1.split(' ');
  for(let i = 0 ; i < inputList.length;i++) {
        nums[i] = Number(inputList[i]);
  }
  nums = nums.sort((a,b) => a - b);
  let secondSmallest = nums[1];
  let smallResultElement = document.getElementById('smallResult');
  smallResultElement.innerHTML = secondSmallest ;
}
//prime
function getPrimes() {
  let num1 = document.getElementById('arr1');
  //get the array of numbers
  num1 = num1.value;
  let nums =[];
  let inputList = num1.split(' ');
  for(let i = 0 ; i < inputList.length;i++) {
        nums[i] = Number(inputList[i]);
  }
  let mylets = nums.filter(function(num1){
  let i = 2,flag = 0;
  while(i < num1){
      if(num1 % i == 0){
         flag++;
         break;
       }
       i++;
  }
  if(flag == 0){
      return num1;
    }
  });
  console.log(mylets);
  let primeResultElement = document.getElementById('primeList');
  primeResultElement.innerHTML = mylets;
}
