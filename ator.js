//ator 

let yAtor = 366;

function MostraAtor(){
    image(imagemDoAtor,100,yAtor,30,30);
}

  function MoverAtor(){
    if (keyIsDown(UP_ARROW)) {
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yAtor += 3;
    }  
  } 