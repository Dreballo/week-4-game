/* 

Pseudo-code for crystal collector Wk 4 game.

    1. Draw random target number at start of the game between 19 - 120  [    ]
    2. Set random value for each of the four crystals between 1-12 [    ]
    3. Collect or add values generated from each crystal [    ]
    4. Define Wins as crystal sum === target number. Define Losses as crystal sum > target [   ]
    5. Restart the game by drawing new target number, crystal values and clear score [   ]



*/



$(document).ready(function() {

    //Declare Global Variables

    var randomTarget = Math.floor((Math.random() * 101) + 19);

    function getRand() {

        return Math.floor((Math.random() * 11) + 1);

    }

    var crystals = {
        red: {
            color: "red",
            value: getRand(),
        },
        blue: {
            color: "blue",
            value: getRand(),
        },

        yellow: {
            color: "yellow",
            value: getRand(),
        },
        purple: {
            color: "purple",
            value: getRand(),
        }

    };


    var totalScore = 0;
    var wins = 0;
    var losses = 0;


    //Appending Random number to the HTML for Target
    function reset() {

        randomTarget = Math.floor((Math.random() * 101) + 19);
        crystals.red.value = Math.floor((Math.random() * 11) + 1);
        crystals.blue.value = Math.floor((Math.random() * 11) + 1);
        crystals.yellow.value = Math.floor((Math.random() * 11) + 1);
        crystals.purple.value = Math.floor((Math.random() * 11) + 1);
        $('.target-number').html("<p>" + randomTarget + "<p>");
        totalScore = 0;
        $('.score').html("<p>" + totalScore + "<p>");
        $('.wins-losses').html('<p>' + 'Wins:' + wins + '<p>');
        $('.wins-losses').append('<p>' + 'Losses:' + losses + '<p>');

    };
    //assigning values to the crystals

    reset();
    console.log(crystals);




    //Listen for on-click events for the 4 crystal buttons.

    $('.crystal').on('click', function() {

        var prop = $(this).attr("id");

        var crystalValue = crystals[prop].value;

        totalScore = totalScore + crystalValue;


        //update Total Score on HTML doc


        $('.score').html('<p>' + totalScore + '<p>');



        //define wins or losses

        if (totalScore === randomTarget) {

            alert("You Win");
            wins++;
            reset();
        } else if (totalScore > randomTarget) {

            alert("You Lost");
            losses++;
            reset();

        }

    });



});
