/*
steps to take when wanting to visualize data:
1 sanitize data
2 draw points on present axis (temp values to y pos)
3 draw points on future axis (same as above)
4 connect points with line
5 give present points a name
*/

let table;
let cities = [];
let tempNow = [];
let tempFuture = [];

let zeroX;
let zeroY;
let yOffset = 20;

let startHue = 275;

function preload () {
    table = loadTable('future_cities_data.csv', 'csv', 'header');
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    //noCursor();

    for (r = 0; r < 20; r++) {
        cities.push(table.getString(r, 'current_city'));
        tempNow.push(table.getString(r, 'Annual_Mean_Temperature'));
        tempFuture.push(table.getString(r, 'future_Annual_Mean_Temperature'))
    }

    print(cities[1]);
    print(tempNow[1]);

    colorMode(HSB);

    zeroX = width/2;
    zeroY = height - 20;

}

function draw () {
    background(255);
    textSize(5);
    //noStroke();
    stroke(startHue, 100, 100);
    fill(startHue, 100, 100);

    translate(zeroX, zeroY);
    scale(1, -1);
    
    for (i = 0; i < cities.length; i++) {
        fill(startHue, 100, 100);
        circle(10, tempNow[i] * yOffset, 10);
            push();
            scale(1, -1);
            textAlign(RIGHT);
            text(cities[i], 0, -tempNow[i] * yOffset);
            pop();
        fill(startHue+90, 100, 100);
        circle(100, tempFuture[i] * yOffset, 10);
            push();
            scale(1, -1);
            textAlign(LEFT);
            text(cities[i], 110, -tempFuture[i] * yOffset);
            pop();
        stroke(startHue, 100, 100);
        line(10, (tempNow[i] * yOffset), 100, (tempFuture[i] * yOffset));
        noStroke();
    }

    //draw x axis
    stroke(0, 0, 0);
    line(0, 0, 150, 0);
    text(time, 150, 0);

    //draw y axis
    line(0, 0, 0, height-20);
    text(temperature, 0, 0);
    noStroke();

}



