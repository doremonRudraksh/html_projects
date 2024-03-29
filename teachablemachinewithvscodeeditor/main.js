Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='image_captured' src='"+data_uri+"'>";
    });
}

console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/isl1DCYo-/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded Successfully");
}

function check(){
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_obj_name").innerHTML = results[0].label;
        document.getElementById("result_obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}