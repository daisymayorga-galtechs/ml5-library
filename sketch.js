//creating a variable for our image classifier 
let mobilenet;

let bird;


//this is the function for callback modelReady in the image classification object stored in the mobilenet variable
function modelReady(){
    console.log('Model is ready!!');

    mobilenet.predict(bird, gotResults);
}

function gotResults(error, results)   {

    if (error) {

        console.error(error);

    } else  {
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence;
        fill(0);
        textSize(64);
        text(label, 10, height - 100);
        createP(label);
        createP(prob);

    }

}

function imageReady()   {
    image(bird, 0, 0, width, height);
}

//p5js library supports a setup function, which executes when the web page loads
function setup() {

    // createCanvas makes a sketch canvas using the p5js library 
    createCanvas(640, 480);
    bird = createImg('assets/bird.jpg', imageReady);
    bird.hide();

    //background color of the canvas is black
    background(0);
    
    //this is a function that generates an image classification object that will be stored in the variable 'mobilenet'
    //The first argument is a string with the name of the model 'MobileNet' and second is  a callback (the ML5 library supports callbacks and promises)
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}

