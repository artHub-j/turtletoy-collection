Canvas.setpenopacity(1);

const turtle = new Turtle();

const cerclExterior = 40; 
const O = 32; 
const compt = 50; 

var r = cerclExterior / compt;
const xOffset = 0; 
const yOffset = 0; 

const a_length = 2.42;
const num_p = 150;
const scale = 1.02;
const angle = 72;
const sides = 15;
const offset_x = 0.11;
const offset_y = 1;

drawFlower(cerclExterior, r, O);

turtle.penup();
turtle.goto(a_length/2,-a_length/2);

let a_len = a_length;

function drawFlower(cE, r, O) 
{
  for (let t = 0; t < 2 * Math.PI; t += 0.001) {
    const x = (cE - r) * Math.cos(t) + O * Math.cos((cE - r) / r * t);
    const y = (cE - r) * Math.sin(t) - O * Math.sin((cE - r) / r * t) - 10;

    if (t == 0) {
      turtle.jump(x, y);
    } else {
      turtle.goto(x, y);
    }
  }
}

function drawStem(n, last_len) {
    a_len = scale * last_len;
    turtle.goto(a_length/2 + offset_x * n,-a_length/2 + offset_y * n);
    turtle.pd();
    for (let i = 0; i < sides; i ++) {
        turtle.right(angle);
        turtle.forward(a_len);
    }
    turtle.pu();
}

function walk(i) {
    drawStem(i, a_len);
    return i < num_p;
}