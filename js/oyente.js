// Agregar Herencia de Tablero.
function Oyente(canvas) {
  Tablero.call(this,canvas);
  this.activo = false;

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
    var cvs = "canvas";

    if(!o.activo) {
      // this.activo = inteligencia.opuesto(this.activo);
      var c = new Circulo(cvs,3,new Punto(cvs,u.x,u.y));
      c.color = "red";
      obj.insertar(c);

      var l = new Linea(cvs,new Punto(cvs,u.x,u.y),new Punto(cvs,this.mousePosX,this.mousePosY));
      l.color = "blue";
      obj.insertar(l);
    }
    else {
      var l = obj.objetos[obj.cant - 1];
      l.obtenerPF().establecerX(u.x);
      l.obtenerPF().establecerY(u.y);

      var c = new Circulo(cvs,3,new Punto(cvs,u.x,u.y));
      c.color = "red";
      obj.insertar(c);
      c = obj.objetos[obj.cant - 1];

      tablero.limpiar();
      obj.dibujarTodo();
    }
    o.activo = inteligencia.opuesto(o.activo);

  }
  this.movMouse = function(event) {
    this.mousePosX = event.clientX;
    this.mousePosY = event.clientY;

    // Movimiento de la linea.
    if(o.activo) {
      var l = obj.objetos[obj.cant - 1];
      l.obtenerPF().establecerX(this.mousePosX - 10);
      l.obtenerPF().establecerY(this.mousePosY - 10);
    }
  }
  // Este metodo todavia no esta implementado.
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
