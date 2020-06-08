// function getProduct(){
//     var arr=document.getElementById("arr").value;
//     var arr1=arr.split(" ");
//     var p=1;
//     for(var i=0;i<arr1.length-1;i++){
//         p*=Number(arr1[i]);
//     }
//     var proudresult=document.getElementById("proudresult");
//     proudresult.innerHTML=p;
// }
// function getOdd(){
//     var arr=document.getElementById("arr1").value;
//     var arr1=arr.split(" ");
//     var odd=[];
//     for(var i=0, j=0;i<arr1.length;i++){
//         if(Number(arr1[i]) % 2 != 0 ){
//             odd[j]=Number(arr1[i]);
//             j++;
//         }
//     }
//     var oddresult=document.getElementById("oddresult");
//     oddresult.innerHTML=odd;
// }
// function getPrimes(){ 
// var arr=document.getElementById("arr").value;
// var arr1=arr.split(" ");
//     var prime=[];
   
//     for(var i=0,j=0;i<arr1.length;i++){
//         var count=0;
//         for( var n=1;n<=Number(arr1[i]);n++)
//         {
           
//          if(Number(arr1[i]) % n==0)
//          { count+=1; }
//         } 
//          if(count==2)
    
//          {prime[j]=Number(arr1[i]);j++}
//     }
//     var primeresult=document.getElementById("primeresult");
//     primeresult.innerHTML=prime;
// }
// function getSecondSmallest(){
//     var arr=document.getElementById("arr").value;
// var arr1=arr.split(" ");
 
//     arr1.sort(function(x,y)
//            {
//            return x-y;
//            });
  
//   var min=arr1[1];
 
// //   for(var i=1;i<arr1.length;i++){
// //       if(arr1[i-1]!=arr1[i])
// //       min=arr1[i];
// //   }
//   var primeresult=document.getElementById("secondsmallresult");
//     primeresult.innerHTML=min;
// }