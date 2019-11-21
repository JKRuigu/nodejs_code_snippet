 // BLOCKING CODE
/**
function notifyAll(fnSms, fnEmail) {   
      console.log('starting notification process');   
      fnSms();   
      fnEmail();   
}


notifyAll(function() {   
   console.log("Sms send ..");   
}, 
function() {   
   console.log("email send ..");   
});   
console.log("End of script");

**/

// NON_BLOCKING CODE ASYCH
/**
function notifyAll(fnSms, fnEmail) {   
   setTimeout(function() {   
      console.log('starting notification process');   
      fnSms();   
      fnEmail();   
   }, 2000);   
}   
notifyAll(function() {   
   console.log("Sms send ..");   
},  
function() {   
   console.log("email send ..");   
});   
console.log("End of script")
**/
/**
// MULTIPLE CALL_BACKS
setTimeout(function() {   
      console.log("one");   
      setTimeout(function() {   
         console.log("two");   
         setTimeout(function() {   
            console.log("three");   
         }, 1000);   
      }, 1000);   
   }, 1000); 
**/
// PROMISE TEMPLATE
/**
var promise = new Promise(function(resolve , reject) {    
   // do a thing, possibly async , then..  
   if(** everthing turned out fine **)    resolve("stuff worked");  
   else     
   reject(Error("It broke"));  
});  
return promise;
// Give this to someone
**/

// PROMISE EXAMPLE
function getSum(n1, n2) {   
   isAnyNegative = function() {   
      return n1 <= 0 || n2 <= 0;   
   }   
   var promise = new Promise(function(resolve, reject) {   
      if (isAnyNegative()) {   
         reject(Error("Negatives not supported"));   
      }   
      resolve(n1 + n2);   
   });   
   return promise;   
}

getSum(5, 0)   
.then(function(result) {   
   console.log(result);   
   return getSum(10, 20); 
   //this returns another Promise   
},   
function(error) {   
   console.log(error.toString());   
})
.then(function(result) {   
   console.log(result);   
   return getSum(30, 40); 
   //this returns another Promise   
}, 
function(error) {   
  console.log(error.toString());   
})   
.then(function(result) {   
   console.log(result);   
}, 
function(error) {         
   console.log(error);   
});   
console.log("End of script ");  