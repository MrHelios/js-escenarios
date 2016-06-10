
function Coleccion(max) {
  this.objetos = new Array(max);
  this.cant=0;

  this.insertar = function(o) {
    this.objetos[this.cant] = o;
    this.cant++;
  }

  this.dibujarTodo = function() {
    var i=0;
    while(i<this.cant) {
      this.objetos[i].dibujar();
      i++;
    }
  }
}
