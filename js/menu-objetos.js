function MenuObjetos(cvs) {
  Area.call(this,cvs);

  this.estaEnEscenario = function(px,py) {
    return (this.fila_inicio<=px && this.fila>px && this.columna_inicio<=py && this.columna>py)
  }
  this.pintar = function() {
    var p = new Punto(this.ID,this.fila_inicio,this.columna_inicio);
    var r = new Rectangulo(this.ID,p,this.fila,this.columna);
    r.color = "white";
    r.pintar();
  }

}
