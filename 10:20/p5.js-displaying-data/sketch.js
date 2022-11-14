let dataSet = [10,25,40,50];

function setup () {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noCursor();
}

function draw () {
    background(255);
    noStroke();
    fill(0, 0, 255);

    for(let i = 0; i < dataSet.length; i++) {
        rect(mouseX + i*100, mouseY - dataSet[i], 50, dataSet[i]);
    }
    
    stroke(0);
    line(mouseX, mouseY, mouseX + (dataSet.length-1)* 100 + 50, mouseY);
    
}