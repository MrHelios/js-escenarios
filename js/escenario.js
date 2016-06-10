function Escenario(canvas) {
  Tablero.call(this,canvas);

  var fila = this.obtenerLong()/10;
  var columna = this.obtenerAltura()/10;

  this.grilla = new Array(fila);
  for(var i=0;i<=fila;i++) {
    this.grilla[i] = new Array(columna);
  }
  this.establecerPos = function(i,j,obj) {
    this.grilla[i][j] = obj;
  }
  this.dibujar = function() {
    for(var i=1; i<fila; i++) {
      for(var j=1; j<columna; j++) {
        this.obtenerPos(i,j).dibujar();
      }
    }
  }
  this.dibujarParte = function(i0,j0,ifinal,jfinal) {
    if(i0<1) i0=1;
    else if(ifinal>fila) ifinal=fila;

    if(j0<1) j0=1;
    else if(jfinal>columna) jfinal=columna;

    for(var i=i0; i<ifinal; i++) {
      for(var j=j0; j<jfinal; j++) {
        this.obtenerPos(i,j).dibujar();
      }
    }
  }

  this.obtenerPos = function(i,j) { return this.grilla[i][j];}
  this.fila = function() { return this.obtenerLong()/10;}
  this.columna = function() { return this.obtenerAltura()/10;}

}
