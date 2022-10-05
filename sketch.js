let mobilenet;

let bird;

function modelReady(){
    console.log('Model is ready!!');

    mobilenet.predict(bird, gotResults);
}

function gotResults(error, results)   {

    if (error) {

        console.error(error);

    } else  {
        console.log(results);

    }

}

function imageReady()   {
    image(bird, 0, 0, width, height);
}

function setup() {

    createCanvas(640, 480);
    bird = createImg('assets/bird.jpg', imageReady);
    bird.hide();

    background(0);
    
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}

