//Carros
let xCarro = [600, 600, 600];
let yCarro = [40,96,150];
let velocidade = [2, 2.5, 3.2];
let comprimentoCarro = 50;
let alturaCarro = 40;


function MostraCarro(){
    for(let i = 0; i < imagemDoCarro.length; i++)
    image(imagemDoCarro[i], xCarro[i], yCarro[i], 50,40);
  }


function MoverCarro(){
    for( let i = 0; i < velocidade.length; i++) {
        xCarro[i] -= velocidade[i];
    }
    
}

  function retonarCarro (){ 
      for( let i = 0; i < imagemDoCarro.length; i++){
        if(passouTela(xCarro[i])) {
            xCarro[i] = 600;
         }
      }
  }
  
  function passouTela (xCarro) {        
      return xCarro < -50;
  }