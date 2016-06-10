// Agregar Herencia de Tablero.
function Oyente(canvas) {
  Tablero.call(this,canvas);
  this.mousePosX = 0;
  this.mousePosY = 0;

  this.mouseClickX = 0;
  this.mouseClickY = 0;

  this.escucharTeclado = function() {
    window.addEventListener("keydown",this.apretarTecla,false);
  }
  // Movimiento del mouse.
  this.detectorMovMouse = function() {
    var canvas = document.getElementById(this.ID);
    canvas.addEventListener("mousemove", this.movMouse,false);
  }
  // Click del mouse.
  this.escucharMouse = function() {
    var canvas = document.getElementById(this.ID);
    canvas.addEventListener("mousedown",this.click,false);
  }

  this.click = function(event) {
    var u = inteligencia.reubicar(event.x - 10,event.y - 10);
    var cvs = this.ID;

    var c = new Circulo("canvas",3,new Punto("canvas",u.x,u.y));
    c.color = "red";
    c.dibujar();
  }
  this.movMouse = function(event) {
    this.mousePosX = event.clientX;
    this.mousePosY = event.clientY;
  }
  this.apretarTecla = function(event) {
    // w
    if(event.keyCode==87) {
    }
    // s
    else if(event.keyCode==83) {
    }
    // a
    else if(event.keyCode==65) {
    }
    // d
    else if( event.keyCode==68) {
    }
  }
}
