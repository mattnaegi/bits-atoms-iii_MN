function setup () {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
    noCursor();
}

function draw () {
    background(255);
    noStroke();
    fill(0, 0, 255);

    let a = atan2(mouseY - height / 2, mouseX - width/8);

    translate(mouseX, mouseY);
    push();
    rotate(a);
    rect(0, 0, 20, 20); // Larger rectangle is rotating in degrees
    pop();
}