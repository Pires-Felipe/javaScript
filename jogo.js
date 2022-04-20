let imgDaEstrada;
let imgDoAtor;
let imgDoCarro;

function preload (){
   imgDaEstrada = loadImage("img/estrada.png");
   imgDoAtor = loadImage("img/ator-1")
   imgDoCarro =loadImage("img/carro-1.png")
}


function setup() {
   createCanvas(500,400)
}

function draw() {
   background(imgDaEstrada);
   Image(imgDoATor, 100, 460);
}
