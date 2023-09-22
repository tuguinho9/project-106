//https://teachablemachine.withgoogle.com/models/pKJfhi6-n/
function iniciar() {
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pKJfhi6-n/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result1").innerHTML = "Som detectado: " + results[0].label;
        document.getElementById("result2").innerHTML = "Precisão: " + Math.floor(results[0].confidence*100) + "%";
        if(results[0].label=="Miado"){
            document.getElementById("img").src = "download (1).png";
        }
        else if(results[0].label=="Latido") {
            document.getElementById("img").src = "download2.jpg";
        }
        else {
            document.getElementById("img").src = "download.png";
        }
    }
}