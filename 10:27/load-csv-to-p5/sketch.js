let table;

function preload () {
    table = loadTable('future_cities_data.csv', 'csv', 'header');
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
    noCursor();

    print(table.getRowCount() + ' total rows in table'); //get number of rows
    print(table.getColumnCount() + ' total columns in table');

    print(table.getString(20, 20)); //get value of cell at x=20, y=100

    for (r = 0; r < table.getRowCount(); r++) {
        print(table.getString(r, 10)); //get all values in column 10
    }
    //oder:
    print(table.getColumn(10));
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