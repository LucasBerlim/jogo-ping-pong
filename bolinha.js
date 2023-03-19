let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function verificaColisaoBorda() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1
    // o || significa OU
;  }
  if(yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
} 


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
