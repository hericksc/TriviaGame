

$(document).ready(function () {

    // $(".btn").on("click", setInterval());
    //console.log();
    var timer = setInterval(function () {


        var count = parseInt($('#countdownClock').html());
        if (count !== 0) {
            $('#countdownClock').html(count - 1);
        } else {
            clearInterval(timer);
            $('#countdownClock').html("TIMES UP!!!!");
        }
    }, 1000);


    var correctAnswers = 0;
    var wrongAnswers = 0;
    var answers = [];
    var value1;
    
    [
        {
            question: "When did Ohio officially become a State?",
            choices: ["1803", "1778", "1921", "Not Sure"],
            answer: 0
        },
    
        {
            question: "How many Presidents were born in Ohio?",
            choices: ["1", "4", "8", "5"],
            answer: 2
        },
        {
            question: "What is the name of the Professional Baseball team in Cincinnati?",
            choices: ["Bluebirds", "Redlegs", "Bearcats", "Reds"],
            answer: 3
        },
    
        {
            question: "What is the capital of Ohio??",
            choices: ["Columbus", "Akron", "Cincinnati", "Toledo"],
            answer: 0
        },
        {
            question: "Who is the head coach of the Ohio State Football Team?",
            choices: ["Tyron Lue", "Urban Meyer", "Marvin Lewis", "Hue Jackson"],
            answer: 0
        },
    ];


    $(function radioVal1() {
        $(".option1").click(function () {
            ($('input:radio:checked').val());
            answers.push($(this).val());
        });

        $(function radioVal2() {
            $(".option2").click(function () {
                ($('input:radio:checked').val());
                answers.push($(this).val());
                //console.log(answers);
            });

            $(function radioVal3() {
                $(".option3").click(function () {
                   ($('input:radio:checked').val());
                    answers.push($(this).val());
                    //console.log(answers);
                });
                $(function radioVal4() {
                    $(".option4").click(function () {
                        ($('input:radio:checked').val());
                        answers.push($(this).val());
                        //console.log(answers);
                    });
                    $(function radioVal5() {
                        $(".option5").click(function () {
                            ($('input:radio:checked').val());
                            answers.push($(this).val());
                            //console.log(answers);
                       
                    });
                    $('#fullResults').val(answers);
                    console.log(answers);
            
                    });
                });
            });
        });
    });
});
// I pushed the answers to an array that you can see in console log but not sure how to chdeck whether the right answer was selected
// if statements below, was trying to pick the answer from the array by comparing the index to the value. 
var answers=[];
value1=0;

if (answers[0] === value1) {
    console.log("You have answered correctly");
    radioVal1();

}else{
   (answers[0] !== value1)
    console.log("You have answered incorrectly");
    
}

   

   // if (answers[0] === value1) {
      // alert("You have answered correctly");

   // }else{
      // (answers[0] !== value1)
        //alert("You have answered incorrectly");
   // }
//radioVal1();
//});




//put answers as value  $(function radioVal (
//use attribute value to extract answer
//radio buttom selected 
//selected feature for which radio button and check 



//var question1 = 4; //put answers into an array similiar to class exercise 5.22//
   // var question2 = 2;
   // var question3 = 1;
   // var question4 = 4;
   // var question5 = 3;
   // var correct = 0;
    //var incorrect = 0;

   // function answerCount();
  //  $('#').text("Answered Correct: " + correct);



    // Create a game with multiple choice or true/false questions
// Put a time limit on the quiz 
// Game ends when time runs out
// The game will keep track of how many questions were answered correctly and how many were answered incorrectly.
// Player cannot choose more than one answer on the quiz