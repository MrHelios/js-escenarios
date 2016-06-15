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
    var u = inteligencia.reubicar(event.x,event.y);
    var cvs = "canvas";

    // Verifica si has hecho un click.
    if(!o.activo && escenario.estaEnEscenario(u.x,u.y)) {
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
    else if(escenario.estaEnEscenario(u.x,u.y)) {
      var l = obj.objetos[obj.cant - 1];
      // Creacion Linea.
      if(o.tecla == 76){
        l.obtenerPF().establecerX(u.x);
        l.obtenerPF().establecerY(u.y);

      }
      // Creacion Rectangulo.
      else {
        l.establecerLongitud(u.x - l.obtenerPI().obtenerX());
        l.establecerAltura(u.y - l.obtenerPI().obtenerY());
      }
      // Creacion del acceso directo.
      monitor_obj.insertar(enlace_obj.crearEnlace(l));
      monitor_obj.objetos[monitor_obj.cant-1].rectangulo.color = monitor_obj.objetos[monitor_obj.cant-1].color;

      var c = new Circulo(cvs,3,new Punto(cvs,u.x,u.y));
      c.color = "red";
      obj.insertar(c);
      c = obj.objetos[obj.cant - 1];

      tablero.limpiar();
      monitor_obj.dibujarTodo();
      obj.dibujarTodo();
      o.activo = inteligencia.opuesto(o.activo);
    }
    // Cuando se hace click en el monitor_objetos.
    else if(monitor_objetos.estaEnEscenario(event.x,event.y)) {
      var i=0;
      var encontrado=false;
      var px = event.x; var py = event.y;

      while(i<monitor_obj.cant && !encontrado) {
        var pix = monitor_obj.objetos[i].rectangulo.obtenerPI().obtenerX();
        var piy = monitor_obj.objetos[i].rectangulo.obtenerPI().obtenerY();
        var pfx = monitor_obj.objetos[i].rectangulo.obtenerLongitud() + pix;
        var pfy = monitor_obj.objetos[i].rectangulo.obtenerAltura() + piy;
        if (pix<=px && pfx>px && piy<=py && pfy>py) encontrado = true;
        else i++;
      }

      if(encontrado) {
        monitor_obj.objetos[i].rectangulo.color = monitor_obj.objetos[i].colorSeleccion;
        monitor_objetos.pintar();
        monitor_obj.dibujarTodo();
        monitor_obj.objetos[i].rectangulo.color = monitor_obj.objetos[i].color;
      }
    }

  }
  this.movMouse = function(event) {
    var mousePosX = event.clientX;
    var mousePosY = event.clientY;

    // Movimiento de la linea.
    if(o.activo) {
      var l = obj.objetos[obj.cant - 1];
      if(o.tecla == 76) {
        l.obtenerPF().establecerX(mousePosX);
        l.obtenerPF().establecerY(mousePosY);
      }
      else {
        l.establecerLongitud(mousePosX - l.obtenerPI().obtenerX());
        l.establecerAltura(mousePosY - l.obtenerPI().obtenerY());
      }

      var p = inteligencia.reubicar(mousePosX,mousePosY);
      tablero.limpiar();
      if( escenario.estaEnEscenario(p.x,p.y)) obj.dibujarOpt(p.x/10 - 20,p.y/10 - 20,p.x/10 + 20,p.y/10 + 20);
      else {
        monitor_obj.dibujarTodo();
        obj.dibujarTodo();
      }
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
        monitor_obj.dibujarTodo();
        obj.dibujarTodo();
      }
    }
  }
}
