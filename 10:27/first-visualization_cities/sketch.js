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

}

function draw () {
    background(255);
    textSize(5);
    noStroke();
    stroke(startHue, 100, 100);
    fill(startHue, 100, 100);

    translate(width/2, height + 300);
    scale(1, -1);
    
    for (i = 0; i < cities.length; i++) {
        circle(-100, tempNow[i] * 45, 10);
            push();
            scale(1, -1);
            textAlign(RIGHT);
            text(cities[i], -110, -tempNow[i] * 45);
            pop();
        circle(100, tempFuture[i] * 45, 10);
            push();
            scale(1, -1);
            textAlign(LEFT);
            text(cities[i], 110, -tempFuture[i] * 45);
            pop();
        stroke(startHue, 100, 100);
        line(-100, (tempNow[i] * 45), 100, (tempFuture[i] * 45));
        noStroke();
    }

}



