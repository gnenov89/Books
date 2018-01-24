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

      $()

})