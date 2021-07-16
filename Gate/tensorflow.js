// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "../my_model/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(432, 432, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    labelContainer.appendChild(document.createElement("div"));
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    
    window.requestAnimationFrame(loop);
   }

   // run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    let max = 0, maxno = 0;
    const failMessage = "FACE ID <br> 인식 실패"
    var date = new Date();
    $(".description h1").html(failMessage);

    for (let i = 0; i < maxPredictions; i++) {
        if(max < prediction[i].probability){
            max = prediction[i].probability;
            maxno = i;
        }
        const classPrediction = prediction[i].className + " : " + prediction[i].probability.toFixed(2);
        console.log(classPrediction); // 인식 값 콘솔 출력
    }
    //$(".description").hide();
    if(prediction[maxno].probability >= 0.90){
        const classPrediction = prediction[maxno].className + "<br>" + prediction[maxno].probability.toFixed(2) * 100 + "%";
        labelContainer.innerHTML = classPrediction;
        document.body.style.backgroundColor = "#27ae60";        
        $("#label-container").show();
        $(".description").hide();
        $(".date").show();
        $(".temperature").show();
        $(".temperature").text("36.5");
        $(".date").text(date);
    } else{
        $(".date").hide();
        $(".temperature").hide();
        $("#label-container").hide();
        $(".description").show();
        $(".description").css("padding","8vh 0 0 0");
        document.body.style.backgroundColor = "#e74c3c";
    }
}

$(document).ready( function () {
    init();
});