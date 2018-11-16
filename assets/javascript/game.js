
// Assign variables
var targetValue = "";
var value;
var wins = 0;
var losses = 0;

var worthArray = [];

$(document).ready(function () {

    // Create a for-loop to add integers to the worthArray;
    $("#start").on("click", function () {
        for (var i = 0; i < 4; i++) {
            value = Math.ceil(Math.random() * 10) + 1;
            worthArray.push(value);
        }
        console.log(worthArray);
    });
});