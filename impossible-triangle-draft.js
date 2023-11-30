https://turtletoy.net/turtle/587ba4f2a2

Canvas.setpenopacity(1);

// Global code will be evaluated once.
const turtle = new Turtle();

const scale = 70; //min=50 max=130 step=5
const width = scale * 0.1;

// a simple way to save the current location
// of the turtle so we can jump back to a specific position
var xPos = [];
var yPos = [];

turtle.penup();
turtle.goto(scale * -0.5, scale * 0.4);
turtle.pendown();

// save current location 0
xPos.push(turtle.x());
yPos.push(turtle.y());

// inner triangle
// lower line
turtle.forward(scale);
// save current location 1
xPos.push(turtle.x());
yPos.push(turtle.y());


// draw right side
turtle.left(360/3);
turtle.forward(scale);
// save current location 2
xPos.push(turtle.x());
yPos.push(turtle.y());

// drawnleft side
turtle.left(360/3);
turtle.forward(scale);

// extend the base line from the lower right corner
turtle.seth(0);
turtle.jump(xPos[1],yPos[1]);
turtle.forward(width);
// save current location 3
xPos.push(turtle.x());
yPos.push(turtle.y());

// extend the right side from the top corner
turtle.seth(-360/3);
turtle.jump(xPos[2],yPos[2]);
turtle.forward(width);
// save current location 4
xPos.push(turtle.x());
yPos.push(turtle.y());

// extend the right side from the top corner
turtle.seth(360/3);
turtle.jump(xPos[0],yPos[0]);
turtle.forward(width);
// save current location 5
xPos.push(turtle.x());
yPos.push(turtle.y());

// draw middle right side
turtle.jump(xPos[3],yPos[3]);
turtle.seth(-360/3);
turtle.forward(scale + width * 3);
// save current location 6
xPos.push(turtle.x());
yPos.push(turtle.y());

//draw middle left side
turtle.jump(xPos[4],yPos[4]);
turtle.seth(360/3);
turtle.forward(scale + width * 3);
// save current location 7
xPos.push(turtle.x());
yPos.push(turtle.y());

//draw middle bottom side
turtle.jump(xPos[5],yPos[5]);
turtle.seth(0);
turtle.forward(scale + width * 3);
// save current location 8
xPos.push(turtle.x());
yPos.push(turtle.y());

// draw 3 backwards facing widths
// bottom right
turtle.right(360/3)
turtle.forward(width);
// save current location 9
xPos.push(turtle.x());
yPos.push(turtle.y());

// top right
turtle.right(360/3)
turtle.jump(xPos[6],yPos[6]);
turtle.seth(0);
turtle.forward(width);
// save current location 10
xPos.push(turtle.x());
yPos.push(turtle.y());

// bottom left
turtle.right(360/3)
turtle.jump(xPos[7],yPos[7]);
turtle.seth(-360/3);
turtle.forward(width);
// save current location 11
xPos.push(turtle.x());
yPos.push(turtle.y());turtle.jump(xPos[6],yPos[6]);
turtle.seth(360/3);
turtle.forward(scale + width * 4);

// outer bottom
turtle.jump(xPos[9],yPos[9]);
turtle.seth(180);
turtle.forward(scale + width * 4);
