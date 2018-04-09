// random dog
var url = 'https://dog.ceo/api/breeds/image/random';

var btn = document.querySelector("#ApiBtn");
var ApiImage = document.querySelector("#ApiImage");
var btn = document.querySelector("#ApiBtn");
btn.addEventListener("click", function(){

  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateData)
  .catch(displayErrors);
});

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
     ApiImage.src = data.message;
}

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}
//****************************************************************************************************
// random fact about today
 var today = new Date();
 var dd = today.getDate();
 var mm = today.getMonth()+1; //January is 0!

var btn = document.querySelector("#ApiBtn");
var ApiText = document.querySelector("#ApiText");



//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  UpdateDateFact();
  })


function UpdateDateFact(){
  //make the request
    $.ajax({
    async: false,
    url: "https://numbersapi.p.mashape.com/"+mm+"/"+dd+"/date",
    headers: {"X-Mashape-Key": "SBA6W6tq4UmshgJDIFqIOjAp6MIBp1JfBiijsn72d6TJpXr2ZT", "Accept": "text/plain"},
    success: function(data) {
            //console.log(data);
             ApiText.innerText = data;
          },
    error: function(data) {
            console.log(data);
          }
    })
}
