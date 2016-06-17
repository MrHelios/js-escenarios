// Funcion basica para trabajar con arreglos.
function Coleccion() {
  this.objetos = new Array();
  this.cant=0;

  this.insertar = function(o) {
    this.objetos.push(o);
    this.cant++;
  }

  this.tipoInstancia = function(obj) {
    var instancias = [Rectangulo,Punto,Circulo,Linea,Escenario,enlaceEscenario];
    var encontrado = false;
    var i=0;

    while(i<instancias.length && !encontrado){
      if(obj instanceof instancias[i]) {
        encontrado=true;
        qInstancia = i;
      }
      i++;
    }

    if(!encontrado) qInstancia=-1;
    return qInstancia;
  }

  this.eliminar = function(obj) {
    var instancias = [Rectangulo,Punto,Circulo,Linea,Escenario,enlaceEscenario];
    // Busco que tipo de instancia es.
    var qInstancia = this.tipoInstancia(obj);
    var encontrado = false;
    var i=0;

    if(qInstancia == -1) encontrado=true;

    // Luego busco el objeto.
    while(i<this.cant && !encontrado) {
      if(this.objetos[i] instanceof instancias[qInstancia] && this.objetos[i].equals(obj)) {
        // this.objetos.pop(obj);
        encontrado = true;

        var j=i;
        while(j+1<this.cant) {
          if( this.objetos[i] instanceof enlaceEscenario ){
            this.objetos[j+1].punto = new Punto(tablero.ID, this.objetos[j+1].punto.obtenerX(), this.objetos[j+1].punto.obtenerY() - (this.objetos[j+1].altura + 5));
          }
          this.objetos[j] = this.objetos[j+1];
          j++;
        }
        this.objetos.pop();
        this.cant--;
      }
      i++;
    }
  }

  this.dibujarTodo = function() {
    var i=0;
    while(i<this.cant) {
      this.objetos[i].dibujar();
      i++;
    }
  }

}

// Esta funcion hereda de Coleccion.
function coleccionEscenario() {
  Coleccion.call(this);

  // Dibuja parte del grillado.
  this.dibujarOpt = function(i0,j0,ifinal,jfinal) {
    this.objetos[0].dibujar();
    this.objetos[1].dibujarParte(i0,j0,ifinal,jfinal);
    var i=2;
    while(i<this.cant) {
      this.objetos[i].dibujar();
      i++;
    }
  }

}
