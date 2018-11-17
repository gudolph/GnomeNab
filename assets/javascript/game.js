
// Assign variables
var targetValue = "";
var value;
var wins = 0;
var losses = 0;
var counter = 0;


$(document).ready(function () {

    // Create a for-loop to add random integers to the worthArray;
    $("#button").on("click", function () {

        var worthArray = [];

        for (var i = 0; i < 4; i++) {
            value = Math.ceil(Math.random() * 14) + 1;
            worthArray.push(value);
        }

        console.log(worthArray);

        var worthArraySum = 0;
        for (var h = 0; h < worthArray.length; h++) {
            worthArraySum += worthArray[h];
        }

        targetValue = Math.ceil(Math.random() * 75) + worthArraySum;
        $("#currentvalue").text(targetValue);
        for (var j = 0; j < worthArray.length; j++) {

            var gnomeArray = [];

            gnomeArray[j] = $("<img>");
            gnomeArray[j].addClass("gnome");
            gnomeArray[j].attr("src", "../02-Homework/assets/images/Gnome.png");
            gnomeArray[j].attr("data-gnomeValue", worthArray[j])

            gnomeArray.push(gnomeArray[j]);
            $("#gnomes").append(gnomeArray);
          
            if (gnomeArray.length === 4) {
                $("#button").attr("disabled", true);
            }
        }
        console.log(worthArray[0]);

        $(".gnome").on("click", function () {
            var gnomeValue = ($(this).attr("data-gnomeValue"));
            gnomeValue = parseInt(gnomeValue);
            counter += gnomeValue;
            $("#gnomevalue").text(counter);

            if (counter === targetValue) {
                alert("You nabbed dem gnomes!")
                wins++;
            } else if (counter >= targetValue) {
                alert("Those gnomes are too valuable, loser!")
                losses++;
            }
        });
    });

});