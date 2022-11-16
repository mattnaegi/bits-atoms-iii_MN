/*
steps to take when wanting to visualize data:
1 sanitize data
2 draw points on present axis (temp values to y pos)
3 draw points on future axis (same as above)
5 connect points with line
6 give present points a name
*/

let table;
let cities = [];
let tempNow = [];
let tempFuture = [];

let zeroX;
let zeroY;
let yOffset = 20;

let _hue = 275;
let nowPos, futurePos;

function preload () {
    table = loadTable('future_cities_data.csv', 'csv', 'header');
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    noCursor();

    for (r = 0; r < 20; r++) {
        cities.push(table.getString(r, 'current_city'));
        tempNow.push(table.getString(r, 'Annual_Mean_Temperature'));
        tempFuture.push(table.getString(r, 'future_Annual_Mean_Temperature'))
    }

    print(cities[1]);
    print(tempNow[1]);

    colorMode(HSB);

    zeroX = 100;
    zeroY = height - 20;

    nowPos = 50;
    futurePos = zeroX * 5;

}

function draw () {
    background(255);
    textSize(5);
    noStroke();
    //stroke(startHue, 100, 100);
    fill(_hue, 100, 100);

    translate(zeroX, zeroY);
    scale(1, -1);
    
    for (i = 0; i < cities.length; i++) {
        stroke(_hue, 100, 100);
        line(nowPos, (tempNow[i] * yOffset), futurePos, (tempFuture[i] * yOffset));
        noStroke();
        fill(_hue, 100, 100);
        circle(nowPos, tempNow[i] * yOffset, 10);
            push();
            scale(1, -1);
            textAlign(RIGHT);
            text(cities[i], nowPos-10, -tempNow[i] * yOffset);
            pop();
        fill(_hue, 100, 100);
        circle(futurePos, tempFuture[i] * yOffset, 10);
            push();
            scale(1, -1);
            textAlign(LEFT);
            text(cities[i], futurePos+10, -tempFuture[i] * yOffset);
            pop();
        
        _hue = _hue + 10;
        
    }

    //draw x axis
    stroke(0);
    line(0, 0, futurePos+100, 0);
    push();
        noStroke();
        scale(1, -1);
        textAlign(LEFT);
        text('time', futurePos+110, 0);
    pop();

    //draw y axis
    stroke(0);
    line(0, 0, 0, tempFuture[5]*100);
    push();
        noStroke();
        scale(1, -1);
        textAlign(LEFT);
        text('temperature', 0, -height-100);
    pop();

}