function enlaceEscenario(cvs,p,i) {
  Tablero.call(this,cvs);

  this.punto = p;
  this.longitud = 100;
  this.altura = 30;
  this.rectangulo = new Rectangulo(cvs, p, this.longitud, this.altura);
  this.info = i;

  this.establecerPunto = function(p) {
    this.punto = p;
  }
  this.dibujar = function() {
    this.rectangulo.dibujar();
  }

  this.crearEnlace = function(i) {
    var p = this.punto.clone()
    this.punto.establecerY(this.punto.obtenerY() + 35);
    return new enlaceEscenario(this.ID,p,i);
  }
  this.obtenerPunto = function() { return this.punto;}
}
