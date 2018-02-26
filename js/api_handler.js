//---------------------------------------------------------------------------------
// random fact about today
//make the request  for text about today
function getDayText(){
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
  if(XHR.readyState == 4 && XHR.status == 200) {
    ApiText.innerText = XHR.responseText;
  } else{
    ApiText.innerText = "Please click generate again, API didn't respond.";
  }
}

XHR.open("GET",url2);
XHR.send();
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
//---------------------------------------------------------------------------------
// random dog
var url = 'https://dog.ceo/api/breeds/image/random';
// var url2 = 'http://numbersapi.com/02/14/date';
var url2 = 'http://numbersapi.com/'+mm+'/'+dd+'/date';

var btn = document.querySelector("#ApiBtn");
var ApiImage = document.querySelector("#ApiImage");
var ApiText = document.querySelector("#ApiText");
//---------------------------------------------------------------------------------
var btn = document.querySelector("#ApiBtn");
btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateData)
  .catch(displayErrors);

  getDayText();
});

//initial
//getDayText();

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}

function parseJSON (res){
  return res.json().then(function(parsedData){
    return parsedData;
  })
}

function updateData (data){
    // var fullname = data.name.first + " " + data.name.last;
     ApiImage.src = data.message;
}

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}


//
//
//
// // random fact about today
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
//
// //var url = 'http://numbersapi.com/'+mm+'/'+dd+'/date';
// var url2 = 'http://numbersapi.com/02/14/date';
//
// var btn = document.querySelector("#ApiBtn");
// var ApiText = document.querySelector("#ApiText");
//
// //listen for clicks
// btn.addEventListener("click", function(){
//   //make the request
//   var XHR = new XMLHttpRequest();
//
//   XHR.onreadystatechange = function(){
//     if(XHR.readyState == 4 && XHR.status == 200) {
//       ApiText.innerText = XHR.responseText;
//     }
//   }
//
//   XHR.open("GET",url2);
//   XHR.send();
// })
//
//
//
//
//
//
// //
// // var ApiText = document.querySelector("#ApiText");
// //
// // var btn = document.querySelector("#ApiBtn");
// // btn.addEventListener("click", function(){
// //   console.log(dd+'/'+mm);
// //   fetch(url)
// //   .then(handleErrors)
// //   .then(parseJSON)
// //   .then(updateData)
// //   .catch(displayErrors);
// // });
// //
// // function handleErrors(res){
// //   if(!res.ok){
// //     throw Error(res.status);
// //   }
// //   return res;
// // }
// //
// // // function parseJSON (res){
// // //   return res.json().then(function(parsedData){
// // //     return parsedData;
// // //   })
// // // }
// //
// // function updateData (res){
// //     // var fullname = data.name.first + " " + data.name.last;
// //     console.log(res);
// //      ApiText = res;
// // }
// //
// // function displayErrors(err){
// //   console.log("INSIDE displayErrors!");
// //   console.log(err);
// // }
// //
//
//
// // var btn = document.querySelector("#ApiBtn");
// // var img = document.querySelector("#ApiImage");
// //
// // //listen for clicks
// // btn.addEventListener("click", function(){
// //   //make the request
// //   var XHR = new XMLHttpRequest();
// //
// //   XHR.onreadystatechange = function(){
// //     if(XHR.readyState == 4 && XHR.status == 200) {
// //       var url = JSON.parse(XHR.responseText).message;
// //       img.src = url;
// //     }
// //   }
// //
// //   XHR.open("GET","https://dog.ceo/api/breeds/image/random");
// //   XHR.send();
// // })
