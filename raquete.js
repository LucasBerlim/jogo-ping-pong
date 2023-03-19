let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaquete = 5;
let yRaquete = 150;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente; 

let chanceDeErrar = 0;

function mostraRaquete (x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;  
  }
}

//multiplayer
/*function movimentaRaqueteOponente() {
  if(keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;  
  }
}*/

//movimenta raquete oponente sozinho
function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if(chanceDeErrar >= 39) {
      chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35) {
      chanceDeErrar = 35;
    }
  }
}

function verificaColisaoRaquete() {
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
    
    
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

