document.addEventListener("DOMContentLoaded", function() {
    var checkButton = document.getElementById("checkButton");
    var output = document.getElementById("output");

    checkButton.addEventListener("click", function() {
        var choice = prompt("Enter Last Math Class * Course Code Only* ");

        var validChoices = ["081", "084", "085", "097", "098", "099", "107", "116", "141", "142", "148", "151", "152", "163", "220", "221", "224", "238"];
        if (validChoices.includes(choice)) {
            output.innerHTML = "You entered: " + choice + "<br>";
            output.innerHTML += "<b>Congratulations! You have completed all the required classes to get the BAS or AD.</b>";
        } else {
            output.innerHTML = "Wrong input. Try Again!";
        }
    });
});