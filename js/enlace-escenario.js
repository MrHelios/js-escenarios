function enlaceEscenario(cvs,i,p) {
  Tablero.call(this,cvs);

  this.punto = p || new Punto(cvs, 18, 50);;
  this.longitud = 100;
  this.altura = 30;
  this.rectangulo = new Rectangulo(cvs, this.punto, this.longitud, this.altura);
  this.info = i;
  this.color = "rgb(204,204,204)"
  this.colorSeleccion = "red";

  this.establecerPunto = function(p) {
    this.punto = p;
  }

  this.dibujar = function() {
    this.rectangulo.dibujar();
  }

  this.equals = function(rect) {
    return this.rectangulo.equals(rect.rectangulo);
  }

  this.obtenerPunto = function() { return this.punto;}

}
