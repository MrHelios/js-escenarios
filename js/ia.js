function IA() {

  this.reubicar = function(posX,posY) {
    var u = {x: posX,y:posY};
    u.x = this.reubicarCuentas(u.x);
    u.y = this.reubicarCuentas(u.y);
    return u;
  }

  // Ubica la posicion en una posicion Multiplo de 10.
  // Se ejecutara cuando se ejecute reubicar.
  this.reubicarCuentas = function(numero) {
    var temp = numero;
    if( temp % 10 <= 5 ) temp = temp - (temp % 10);
    else temp = temp + (10 - (temp % 10));
    return temp;
  }

  // El parametro debe ser boolean.
  this.opuesto = function(b) {
    return !b;
  }

  // Si esta en el tablero de dibujo debe analizarse si ya hubo un click.
  this.permitirDibujo = function(escenario, estado_click, x, y) {
    var puede;

    if( escenario.estaEnEscenario(x,y) && !estado_click ) puede = true;
    else puede = false;
    return puede;
  }

  // Verifica que se haya seleccionado un tipo de dibujo.
  this.teclaCorrecta = function(tecla) {
    if(tecla == 76 || tecla == 82) return true;
    else return false;
  }

  // Cuando se verifico el click y la tecla
  // Se comienza a construir la Linea o el Rectangulo.
  this.empezarDibujo = function(coleccion,cvs,clickx,clicky,mousex,mousey,tecla){
    var c = new Circulo(cvs,3,new Punto(cvs,clickx,clicky));
    c.color = "red";
    coleccion.insertar(c);

    if(tecla == 76){
      var l = new Linea(cvs,new Punto(cvs,clickx,clicky),new Punto(cvs,mousex,mousey));
      l.color = "blue";
      coleccion.insertar(l);
    }
    else if(tecla == 82){
      var l = new Rectangulo(cvs,new Punto(cvs,clickx,clicky),mousex,mousey);
      l.color = "blue";
      coleccion.insertar(l);
    }
    // Requiere despues de esta ejecucion cambiar el estado de activo.
  }

  this.finalizarDibujo = function(coleccion, coleccion_monitor, cvs, clickx, clicky, tecla) {
    var l = coleccion.objetos[coleccion.cant - 1];
    var establecido = false;

    // Establecemos el ultimo punto de la linea.
    if(tecla == 76) {
      l.obtenerPF().establecerX(clickx);
      l.obtenerPF().establecerY(clicky);
      establecido = true;
    }
    // Establecemos las medidas del Rectangulo.
    else if(tecla == 82) {
      l.establecerLongitud(clickx - l.obtenerPI().obtenerX());
      l.establecerAltura(clicky - l.obtenerPI().obtenerY());
      establecido = true;
    }
    // Creacion del Enlace.
    if(establecido) {
      var c = new Circulo(cvs,3,new Punto(cvs, clickx, clicky));
      c.color = "red";
      coleccion.insertar(c);

      c = coleccion_monitor.cant - 1;
      console.log(c);
      if(c == -1) {
        coleccion_monitor.insertar(new enlaceEscenario(cvs, l));
        coleccion_monitor.objetos[0].rectangulo.color = coleccion_monitor.objetos[0].color;
      }
      else {
        // Agrego el punto del ultimo elemento.
        coleccion_monitor.insertar(new enlaceEscenario(cvs, l,coleccion_monitor.objetos[c].punto.clone()));
        // Le sumo 35 px.
        coleccion_monitor.objetos[c+1].punto.establecerY(coleccion_monitor.objetos[c+1].punto.obtenerY() + 35);
        coleccion_monitor.objetos[coleccion_monitor.cant-1].rectangulo.color = coleccion_monitor.objetos[coleccion_monitor.cant-1].color;
      }

    }
  }

  this.seleccionEnlace = function(coleccion,x,y) {
    var i=0;
    var encontrado=false;
    var px = x, py = y;

    while(i<coleccion.cant && !encontrado) {
      var pix = coleccion.objetos[i].rectangulo.obtenerPI().obtenerX();
      var piy = coleccion.objetos[i].rectangulo.obtenerPI().obtenerY();
      var pfx = coleccion.objetos[i].rectangulo.obtenerLongitud() + pix;
      var pfy = coleccion.objetos[i].rectangulo.obtenerAltura() + piy;
      if (pix<=px && pfx>px && piy<=py && pfy>py) encontrado = true;
      else i++;
    }
    if(!encontrado) i=-1;
    return i;
  }

  this.obtenerObjetoEnlace = function(coleccion_monitor,coleccion_obj,pos) {
    var i=0, instancias = [Rectangulo,Punto,Circulo,Linea];
    var encontrado=false, posicion_objeto = -1;
    var tipo_monitor = coleccion_monitor.tipoInstancia(coleccion_monitor.objetos[pos].info);

    while(i<coleccion_obj.cant && !encontrado) {
      if(coleccion_obj.objetos[i] instanceof instancias[tipo_monitor] && coleccion_obj.objetos[i].equals(coleccion_monitor.objetos[pos].info)) {
        posicion_objeto = i;
      }
      i++;
    }
    return posicion_objeto;
  }

  this.pintarSeleccion = function(coleccion,monitor,i) {
    coleccion.objetos[i].rectangulo.color = coleccion.objetos[i].colorSeleccion;
    monitor.pintar();
    coleccion.dibujarTodo();
    coleccion.objetos[i].rectangulo.color = coleccion.objetos[i].color;
  }

}
