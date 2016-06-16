function Coleccion(max) {
  this.objetos = new Array(max);
  this.cant=0;

  this.insertar = function(o) {
    this.objetos[this.cant] = o;
    this.cant++;
  }

  this.tipoInstancia = function(obj) {
    var instancias = [Rectangulo,Punto,Circulo,Linea,Escenario];
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
    var instancias = [Rectangulo,Punto,Circulo,Linea];
    // Busco que tipo de instancia es.
    var qInstancia = this.tipoInstancia(obj);
    var encontrado = false;
    var i=0;

    if(qInstancia == -1) encontrado=true;

    // Luego busco el objeto.
    while(i<this.cant && !encontrado) {
      if(this.objetos[i] instanceof instancias[qInstancia] && this.objetos[i].equals(obj)) {
        encontrado = true;
        var j=i;
        while(j+1<this.cant) {
          this.objetos[j] = this.objetos[j+1];
          j++;
        }
        this.objetos[j] = null;
        this.cant--;
      }
      i++;
    }
    console.log(encontrado);
  }

  this.dibujarTodo = function() {
    var i=0;
    while(i<this.cant) {
      this.objetos[i].dibujar();
      i++;
    }
  }

}
