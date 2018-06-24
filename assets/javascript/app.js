//https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=5&
//example of API search 
//? indicates search feild
//& indicates new property
//concat with +
//assign with =

//example of ajax

var url = "https://api.giphy.com/v1/gifs/search?q="+ variable + "&api_key=dc6zaTOxFJmzC&limit=5&"

var variable = "cat"
//varibale = button click listener or input field on screen
var imgSrc = response.data[0].images.fixed_height.url;
var newImg = $("<img>");
newImg.attr("src", imgSrc);

$.ajax(url).then(function(response){
    $(".section").append(newImg)
});