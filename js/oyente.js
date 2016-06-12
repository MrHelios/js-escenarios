// Agregar Herencia de Tablero.
function Oyente(canvas) {
  Tablero.call(this,canvas);
  this.activo = false;
  this.tecla = null;

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

    // Verifica si has hecho un click.
    if(!o.activo) {
      // Dibuja la linea.
      if(o.tecla == 76) {
        var c = new Circulo(cvs,3,new Punto(cvs,u.x,u.y));
        c.color = "red";
        obj.insertar(c);

        var l = new Linea(cvs,new Punto(cvs,u.x,u.y),new Punto(cvs,this.mousePosX,this.mousePosY));
        l.color = "blue";
        obj.insertar(l);
        o.activo = inteligencia.opuesto(o.activo);
      }
      // Dibuja el rectangulo.
      else if(o.tecla == 82) {
        var c = new Circulo(cvs,3,new Punto(cvs,u.x,u.y));
        c.color = "red";
        obj.insertar(c);

        var l = new Rectangulo(cvs,new Punto(cvs,u.x,u.y),this.mousePosX,this.mousePosY);
        l.color = "blue";
        obj.insertar(l);
        o.activo = inteligencia.opuesto(o.activo);
      }
    }
    else {
      var l = obj.objetos[obj.cant - 1];
      // Linea.
      if(o.tecla == 76){
        l.obtenerPF().establecerX(u.x);
        l.obtenerPF().establecerY(u.y);
      }
      // Rectangulo.
      else {
        l.establecerLongitud(u.x - l.obtenerPI().obtenerX());
        l.establecerAltura(u.y - l.obtenerPI().obtenerY());
      }

      var c = new Circulo(cvs,3,new Punto(cvs,u.x,u.y));
      c.color = "red";
      obj.insertar(c);
      c = obj.objetos[obj.cant - 1];

      tablero.limpiar();
      obj.dibujarTodo();
      o.activo = inteligencia.opuesto(o.activo);
    }

  }
  this.movMouse = function(event) {
    var mousePosX = event.clientX;
    var mousePosY = event.clientY;

    // Movimiento de la linea.
    if(o.activo) {
      var l = obj.objetos[obj.cant - 1];
      if(o.tecla == 76) {
        l.obtenerPF().establecerX(mousePosX - 10);
        l.obtenerPF().establecerY(mousePosY - 10);
      }
      else {
        l.establecerLongitud(mousePosX - 10 - l.obtenerPI().obtenerX());
        l.establecerAltura(mousePosY - 10 - l.obtenerPI().obtenerY());
      }

      var p = inteligencia.reubicar(mousePosX,mousePosY);
      tablero.limpiar();
      obj.dibujarOpt(p.x/10 - 20,p.y/10 - 20,p.x/10 + 20,p.y/10 + 20);
    }
  }
  // Este metodo todavia no esta implementado.
  this.apretarTecla = function(event) {
    console.log(event.keyCode);
    // tecla: l
    if(event.keyCode==76) {
      o.tecla = 76;
    }
    // tecla: r
    else if(event.keyCode==82) {
      o.tecla = 82;
    }
    // tecla: Esc
    else if(event.keyCode==27) {
      o.tecla = 27;

      if(o.activo) {        
        // Elimina el ultimo.
        for(var i=0; i<2;i++) obj.eliminar(obj.objetos[obj.cant - 1]);

        o.activo = inteligencia.opuesto(o.activo);
        tablero.limpiar();
        obj.dibujarTodo();
      }
    }
  }
}
