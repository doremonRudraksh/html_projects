screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = 0;
x = 0;
y = 0;
draw_apple = "";

function preload(){
    apple = loadImage("apple.png");
}

var speechRecognition = window.webkitSpeechRecognition;

var recognition  = new speechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(e){
    console.log(e)

    content = e.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized : " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Started Drawing Apple";
        draw_apple = "set"
    }
    else{
        document.getElementById("status").innerHTML = "The speech has been not recognized as a number";
    }
}

function setup(){
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(0, 150);
}

function draw(){
    if(draw_apple == "set"){
        document.getElementById("status").innerHTML = to_number + " Apple is drawn";
        draw_apple = "";
        speak_data = to_number + "Apple is drawn";
        speak();
        for( var i = 1; i <= to_number; i++){
            x = Math.floor(Math.random()*700);
            y = Math.floor(Math.random()*400);
            image(apple, x, y, 50, 50);
        }
    }
}

function speak(){
    var synth = window.speechSynthesis;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    speak_data = "";
}