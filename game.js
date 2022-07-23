
var gamePattern = [];
var clickedPattern = [];
var randomColor;
var m;
var k;
$(".btn").click(function () {
    clickedPattern.push(this.id);
    const audio = new Audio("sounds/"+this.id+".mp3");
    audio.play();
    $("#"+this.id).addClass("pressed");
    funn(this.id);
    console.log(m);
    checkAns();
    
});
var i = 1;
function nextSequence() {
    $("h1").text("Level "+ i);
    i++;
    var randomNumber = Math.floor(Math.random() * 3);
    var buttonColor = ["green","red","yellow","blue"];
    randomColor = buttonColor[randomNumber]; 
    animare(randomColor);
    gamePattern.push(randomColor);
    clickedPattern = [];
    m=0;
    k=0;
}


function animare(color) {
    $("."+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    const audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}

function checkAns(){
    if(gamePattern.length==0){
        console.log("empty");
        m=0;
        clickedPattern = [];
    }
    else if(clickedPattern[m]==gamePattern[m]){
        k++;
        console.log("success!");
        m++;
    }
    else{
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("red");
        setTimeout(function() {
            $("body").removeClass("red");
        },1000);
        const audio = new Audio("sounds/wrong.mp3");
        audio.play();
    }
    if(k==(i-1)){
        setTimeout(function(){
            nextSequence();
        },500);
    }
}

function funn(root) {
    setTimeout(function() {
        $("#"+root).removeClass("pressed");
    },100);
}

$(document).keypress(function(){
    start();
    nextSequence();
});

function start() {
    i=1;
    gamePattern=[];
    m=0;
    k=0;
}