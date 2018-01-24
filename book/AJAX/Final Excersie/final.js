$(document).ready(function(){

    var animals = [
        "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
        "bird", "ferret", "turtle", "sugar glider", "chinchilla",
        "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
        "capybara", "teacup pig", "serval", "salamander", "frog"
      ];
    
      // function to make buttons and add to page
      function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
          $(areaToAddTo).empty();

          for(var i = 0; i < arratToUse.length; i++) {
              var a = $("<button>");
              a.addClass(classToAdd);
              a.attr("data-type",arrayToUse[i]);
              a.text(arrayToUse[i]);
              $(areaToAddTo).append(a);
          }
      }

      $(document).on("click",".amnimal-button", function(){
          $("#animals").empty();
          $("#animal-button").removeClass("active");
          $(this).addClass("active");

          var typ =$(this).attr("data-type");
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({
                url: queryURL,
                method: "GET"
              })
              .done(function(response) {
                var results = response.data;
          
                for (var i = 0; i < results.length; i++) {
                  var animalDiv = $("<div class=\"animal-item\">");
          
                  var rating = results[i].rating;
          
                  var p = $("<p>").text("Rating: " + rating);
          
                  var animated = results[i].images.fixed_height.url;
                  var still = results[i].images.fixed_height_still.url;
          
                  var animalImage = $("<img>");
                  animalImage.attr("src", still);
                  animalImage.attr("data-still", still);
                  animalImage.attr("data-animate", animated);
                  animalImage.attr("data-state", "still");
                  animalImage.addClass("animal-image");
          
                  animalDiv.append(p);
                  animalDiv.append(animalImage);
          
                  $("#animals").append(animalDiv);
                }
              });
            });
    

})