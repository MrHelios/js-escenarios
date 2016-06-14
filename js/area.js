function Area(canvas) {
  Tablero.call(this,canvas);

  this.multiplicador = 10;
  this.fila_inicio = 1;
  this.columna_inicio = 1;
  this.fila = 100;
  this.columna = 100;

  this.estaEnEscenario = function(px,py) {
    var multi = this.multiplicador;
    return (this.fila_inicio*multi<=px && this.fila*multi>px && this.columna_inicio*multi<=py && this.columna*multi>py)
  }
  this.establecerMultiplicador = function(m) {
    this.multiplicador = m;
  }
  this.establecerFila = function(f) {
    this.fila = f;
  }
  this.establecerFila_Inicio = function(f) {
    this.fila_inicio = f;
  }
  this.establecerColumna = function(c) {
    this.columna = c;
  }
  this.establecerColumna_Inicio = function(c) {
    this.columna_inicio = c;
  }

  this.obtenerFila = function() { return this.obtenerLong()/this.multiplicador;}
  this.obtenerColumna = function() { return this.obtenerAltura()/this.multiplicador;}
  this.obtenerMultiplicador = function() { return this.multiplicador;}

}
