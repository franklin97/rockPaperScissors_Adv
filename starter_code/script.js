var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var random_Number= Math.floor(Math.random()*3);
    if(random_Number==0){
       return"rock"; 
    }
    else if(random_Number==1){
       return"paper"; 
    }
    else if(random_Number==2){
        return"scissors";
    }
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if(userValue===aiValue){
        return"draw";
    }else if(userValue=="rock"&& aiValue=="paper"){
       return "userValue"; 
    }else if(userValue=="paper"&& aiValue=="scissors"){
        return "aiValue";
    }else if(userValue=="scissors"&&aiValue=="paper"){
        return "aiValue";
    }else if(userValue=="paper"&& aiValue=="rock"){
        return "aiValue";
    }else if(userValue=="rock"&& aiValue=="scissors"){
        
    }
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

//var evaluate = function(evt) {
    
//}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(evaluate);
});
