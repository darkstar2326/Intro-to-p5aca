function setup(){
    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw(){
    image(video,125,125,250,250);
    fill("green");
    rect(50,75,25,350);
    rect(425,75,25,350);
    rect(75,70,350,25);
    rect(75,405,350,25);
    fill("red");
    circle(62,75,50);
    circle(438,75,50);
    circle(62,425,50);
    circle(438,425,50);
}

function take(){
    save(image.png);
}