function Coleccion(max) {
  this.objetos = new Array(max);
  this.cant=0;

  this.insertar = function(o) {
    this.objetos[this.cant] = o;
    this.cant++;
  }
  this.eliminar = function(obj) {
    var encontrado = false;
    var instancias = [Rectangulo,Punto,Circulo,Linea];
    var i=0,qInstancia=0;

    // Primero busco la instancia del objeto.
    while(i<instancias.length && !encontrado){
      if(obj instanceof instancias[i]) {
        encontrado=true;
        qInstancia = i;
      }
      i++;
    }
    encontrado = false;
    i=0;

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
  }

  this.dibujarTodo = function() {
    var i=0;
    while(i<this.cant) {
      this.objetos[i].dibujar();
      i++;
    }
  }

}
