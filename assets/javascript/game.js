$(document).ready(function () {

    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#replay").hide();
    $("#winner").hide();
    $("#loser").hide();
    // Create a for-loop to add random integers to the worthArray;
    $("#button").on("click", function () {

        var targetValue = 0;
        var worthArray = [];
        var gnomeArray = [];
        var counter = 0;
        $("#currentvalue").text(targetValue);
        $("#gnomeValue").text(counter);

        console.log(counter)

        for (var i = 0; i < 4; i++) {
            value = Math.ceil(Math.random() * 9) + 1;
            worthArray.push(value);
        }

        console.log(worthArray);

        var worthArraySum = 0;
        for (var h = 0; h < worthArray.length; h++) {
            worthArraySum += worthArray[h];
        }

        targetValue = Math.ceil(Math.random() * 30) + (worthArraySum);
        $("#currentvalue").text(targetValue);
        console.log(targetValue)
        for (var j = 0; j < worthArray.length; j++) {

            gnomeArray[j] = $("<img>");
            gnomeArray[j].addClass("gnome");
            gnomeArray[j].attr("src", "../02-Homework/assets/images/Gnome.png");
            gnomeArray[j].attr("data-gnomeValue", worthArray[j])

            gnomeArray.push(gnomeArray[j]);
            $("#gnomes").append(gnomeArray);

        }

        console.log(worthArray[0]);
        $(this).prop("disabled", true);
        $(".gnome").on("click", function () {
            var gnomeValue = ($(this).attr("data-gnomeValue"));
            gnomeValue = parseInt(gnomeValue);
            counter += gnomeValue;
            $("#gnomeValue").text(counter);
            console.log(counter);

            if (counter === targetValue) {
                wins++;
                $("#winner").show();
                $("#wins").text(wins);

            } else if (counter >= targetValue) {
                $("#loser").show();
                losses++;
                $("#losses").text(losses);
            }
            if ((counter === targetValue) || (counter >= targetValue)) {
                $(".intro").hide();
                $("#button").hide();
                $("#replay").show();

            }
            $("#replay").on("click", function () {
                $("#wins").text(wins);
                $("#losses").text(losses);
                $("#replay").hide();
                $("#button").show();
                $("#winner").hide();
                $("#loser").hide();
                $(".intro").show();
                $("#button").prop("disabled", false);
                $("#gnomeValue").empty();
                $("#gnomes").empty();
                $("#currentvalue").empty();

            });
        });

    });

});