
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  MostraCarro();
  MostraAtor();
  MoverCarro();
  retonarCarro();
  MoverAtor();
  verificaColisao();
}

