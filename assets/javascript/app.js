//https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=5&
//example of API search 
//? indicates search feild
//& indicates new property
//concat with +
//assign with =

//example of ajax


//varibale = button click listener or input field on screen
$(document).ready(function () {


    var gifOptions = ["cat", "dog", "bird", "monkey"]

    function makeButtons() {
        $("#button-box ").empty();
        for (var i = 0; i < gifOptions.length; i++) {
            var a = $("<button>");
            a.addClass("animals").attr("data-name", gifOptions[i]);
            a.addClass("btn btn-secondary");
            a.text(gifOptions[i]);
            $("#button-box").append(a);
        }

    }

    $(".add-animal").on("click", function (event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        gifOptions.push(animal);
        makeButtons();
    })

    makeButtons();

    $(document).on("click", ".animals", function () {
        var variable = $(this).attr("data-name");
        var url = "https://api.giphy.com/v1/gifs/search?q=" + variable + "&api_key=dc6zaTOxFJmzC&rating=pg&";
        
    
        $.ajax(url).then(function (response) {
            // var rand = Math.floor(Math.random() * response.length);


            var imgSrc = response.data[9].images.fixed_height.url;
            var newImg = $("<img src='something' alt='a gif'>");
            newImg.attr("src", imgSrc);
            newImg.attr("alt", $(this).attr("data-name"));
            $("#play-area").append(newImg)

        });
    })

});