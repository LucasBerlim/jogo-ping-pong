let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("sons/trilha.mp3");
  ponto = loadSound("sons/ponto.mp3");
  raquetada = loadSound("sons/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function incluiPlacar() {
  
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill('orange');
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  fill('orange');
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 450, 26);
}

function marcaPonto() {
  
  if(xBolinha > 590) {
    ponto.play();
    meusPontos++;
  }
  if(xBolinha < 10) {
    ponto.play();
    pontosDoOponente++;
  }
}