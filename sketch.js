//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//sons do jogo
let raquetada
let ponto


function preload(){

trilha = loadSound("trilha.mp3");
ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");

}


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//variaveis do oponente 
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimenteRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
 incluiPlacar(); 
  marcaPonto();
  
 
  
 
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//sons do jogo
let raquetada
let ponto


function preload(){

trilha = loadSound("trilha.mp3");
ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");

}


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//variaveis do oponente 
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimenteRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
 incluiPlacar(); 
  marcaPonto();
  
 
  
 
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
