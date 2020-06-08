var stringmethods = {
  reverse : function (str) {
  let strReverse ="";
  for (let i=str.length-1 ; i>=0;--i) {
    strReverse += str[i];      
  }
  return strReverse;
},
encode: function(str,securekey) {
  let indx = 0;
  let  encoderes =""; 
  len =securekey.length;
  for ( let i =0 ; i < str.length ; i++){
    encoderes += str[i];
    encoderes += securekey[indx++];
    if( indx == len) {
      indx=0;
    }  
  }
  // return encoderes;
  // var halfind = encoderes.length/2;
  // encoderes = encoderes.substr(halfind) + encoderes.substr(0,encoderes.length-halfind)
  
  var finalencoderes = "" ;
  var strAlphabets = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let j=0;j<encoderes.length;j++){
    var letrs =  /^[A-Za-z]+$/;
    if(encoderes[j].match(letrs)) {
      var ind = strAlphabets.indexOf(encoderes[j]);
      ind++; //advance to the next alphabet
      finalencoderes += strAlphabets[ind]; //replace with next char in alphabet list
      //result[j] = strAlphabets[ind];
    }
    else {
      finalencoderes += encoderes[j];
    }

  }
  return finalencoderes;


}
,
decode: function(str, key) {
  var result = '';
  var len = key.length;

  //3. reduce alphabets only by one ascii code
  var strAlphabets = "ZYXWVUTSRQPONMLKJIHGFEDCBAZzyxwvutsrqponmlkjihgfedcbaz";
 
  for(var j = 0; j < str.length; j++) {
    var letters = /^[A-Za-z]+$/;
    if(str[j].match(letters)) {
      var ind = strAlphabets.indexOf(str[j]);
      ind++; //advance to the next alphabet
      result += strAlphabets[ind]; //replace with next char in alphabet list
    }
    else {
      result += str[j];
    }
  }

  //2.split string into half and move positions of each
  // var halfIndex = result.length / 2;
  // result = result.substr(halfIndex) + result.substr(0, result.length-halfIndex);

  var finalResult = "";
  var ind = 0;
  //1.For every character in str, remove one digit from key
  //repeat until the end of string by adding chars from key again
  for(var i = 0; i < result.length; i++){
    finalResult += result[i++];
    if(result[i] != key[ind++]){
      return '';
    }
    if(ind == key.length) {
        ind = 0;
    }
  }
  return finalResult;
},
search: function(sourceString, searchStr) {
 
}
}

var securekey = "abcd123";
function reverse() {
var str = document.getElementById('str1').value;
var reverseStr = stringmethods.reverse(str);
document.getElementById('reverseResult').innerHTML = reverseStr;
}
function encode() {
  var str = document.getElementById('str1').value;
  var encoderes = stringmethods.encode(str,securekey);
  document.getElementById('encodeResult').innerHTML = encoderes;
  
}
function decode() {
  var str = document.getElementById('str1').value;
  var encoderes = stringmethods.decode(str,securekey);
  document.getElementById('decodeResult').innerHTML = encoderes;
}