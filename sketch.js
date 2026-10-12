//creo 2 variabili che contengono le dimensioni del mio canvas
let xMax = 500;
let yMax = 500; 
//creo 2 variabili anche per le dimensioni della forma di formaggio 
let xCheese = xMax/2; 
let yCheese = yMax/2;
//creo una variabile da incrementare per aumentare l'ampiezza dello spicchio 
let fine = 218; //218 è l'angolo di partenza che corrisponde al topo
//creo una variabile per la posizione iniziale della pupilla che prima di muoversi 
let xp = xCheese-90; 
let dir = 0.7; 

function setup() {
  createCanvas(xMax, yMax);
  angleMode(DEGREES); //per scrivere gli angoli in gradi
}

function moveOcchio() {
  xp = xp - dir;
  if (xp <= xCheese - 104 || xp >= xCheese - 86) {
    dir = -dir;   //se esce dai bordi inverte direzione
  }
}

function draw() {
  background(0,0,0);
  
  push();
    noStroke();
    //disegno la forma di formaggio
    fill(242, 181, 2);
    ellipse(xCheese, yCheese, 400);
  pop();

  push()
    randomSeed(99); 
    noStroke(); //tolgo outline 
    fill(0);
    for(let i=0; i<40; i++) {
    let cx = (i*73) % width;
    let cy = (i*53) % height;
      if (i%2 == 0) {
        ellipse (cx, cy, random(8, 13)); 		
      }else if(i%3 == 0) {
        ellipse (cx, cy, 18); 
      }else {
        ellipse (cx, cy, 20);
      }
    }
  pop()

  //disegno il morso 
  push();
    fill(0);
    arc(xCheese, yCheese, xMax, yMax, 218, fine, PIE); //metto PIE così che l'arco di circonferenza mi disegna lo spicchio pieno interno 
  pop();

  push();
    noStroke();
    //disegno il corpo del topo
    fill(0,0,0);
    triangle(xCheese-230, yCheese, xCheese-220, yCheese-180, xCheese, yCheese); 
  
    //orecchio del topo
    ellipse(xCheese-90, yCheese-100, 55);
  
    //occhio del topo
    fill(255,255,255);
    ellipse(xCheese-95, yCheese-35, 20);
    fill(0,0,0);
    ellipse(xp, yCheese-32, 13);

    //disegno il naso del topo
    fill(255, 192, 203);
    ellipse(xCheese-1, yCheese-7, 20);

    //disegno i baffi del topo
    stroke(200);
    strokeWeight(3);
    line(xCheese-20, yCheese-7, xCheese-60, yCheese-30);
    line(xCheese-20, yCheese-7, xCheese-58, yCheese-19);
    line(xCheese-20, yCheese-7, xCheese-60, yCheese-10);

  pop();
  if (frameCount > 35) { //do un ritardo all'animazione
    if (fine <= 540) {
      fine += 0.8;
  } else { // quando finisce di mangiare il formaggio
      moveOcchio();
  }
  }
  
}
