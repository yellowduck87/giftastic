$(document).ready(function () {


    var gifOptions = ["cat", "dog", "bird", "monkey", "kitten", "turtle", "hamster", "snake", "puppy", "duckling", "fluffy"]

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
    var imgSrcAni;
    var imgSrcStill;
    var url;
    var variable;

    $(document).on("dblclick", ".animals", function() {
        generateGifs();
    });

    $(document).on("click", ".animals", function () {
        $("#play-area").empty();
        variable = $(this).attr("data-name");

        url = "https://api.giphy.com/v1/gifs/random?tag=" + variable + "&api_key=0iEVKxkLR16EjmugC8AgbL4n4A4I97YC&rating=pg";

        $("#play-area").attr("data-double", variable);
        generateGifs()
    });




    function generateGifs() {
        for (var j = 0; j < 10; j++) {
            $.ajax(url).then(function (response) {


                imgSrcAni = response.data.images.fixed_height.url;
                imgSrcStill = response.data.images.fixed_height_still.url;
                var newImg = $("<img src='something' alt='a gif'>");
                newImg.attr("src", imgSrcStill);
                newImg.attr("data-still", imgSrcStill);
                newImg.attr("data-ani", imgSrcAni)
                newImg.attr("data-state", "still");
                newImg.attr("alt", $(this).attr("data-name"));
                $("#play-area").append(newImg)
            });

        };
    };

    $(document).on("click", "img", function () {
            if ($(this).attr("data-state") === "still") {
                $(this).attr("src", ($(this).attr("data-ani")));
                $(this).attr("data-state", "animate");
            } else if ($(this).attr("data-state") === "animate") {
                $(this).attr("src", ($(this).attr("data-still")));
                $(this).attr("data-state", "still");
            }
        }

    );

    if ($("#play-area").attr("data-double") === variable) {
    }

    $(document).on("dblclick", "img", function () {
        $(this).addClass("fav")
        $("#add-fav").append($(this));
    });
    $(document).on("dblclick", ".fav", function () {
        // $(this).removeClass("fav");
        $(this).remove();
    })

    function setFavs() {
        var currentFav = localStorage.getItem('fav');
        currentFav = document.querySelector('fav');
        $("#add.fav").append(currentFav);
    }

    function populateFavs() {
        localStorage.setItem('fav', document.querySelector("fav"));
        setFavs();
    }
    populateFavs();
    // window.addEventListener('storage', function(e){
    //     $(document).querySelector("favs").content = e.
    // })

});