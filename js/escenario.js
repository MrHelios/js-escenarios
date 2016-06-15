function Escenario(cvs) {
  Area.call(this,cvs);

  this.fila_inicio = 15;
  this.columna_inicio = 6;
  this.fila = this.obtenerLong()/this.multiplicador;
  this.columna = this.obtenerAltura()/this.multiplicador;

  var p = new Punto(this.ID,(this.fila_inicio-1)*10,(this.columna_inicio-1)*10);
  var l = ((this.fila-this.fila_inicio)*this.multiplicador);
  var a = ((this.columna-this.columna_inicio)*this.multiplicador)
  this.limites = new Rectangulo(this.ID,p,l+10,a+10);

  this.grilla = new Array(this.fila);
  for(var i=0;i<=this.fila;i++) {
    this.grilla[i] = new Array(this.columna);
  }

  this.establecerPos = function(i,j,obj) {
    this.grilla[i][j] = obj;
  }
  this.dibujar = function() {
    for(var i=this.fila_inicio; i<this.fila; i++) {
      for(var j=this.columna_inicio; j<this.columna; j++) {
        this.obtenerPos(i,j).dibujar();
      }
    }
  }
  this.dibujarParte = function(i0,j0,ifinal,jfinal) {
    if(i0<this.fila_inicio) i0=this.fila_inicio;
    else if(ifinal>this.fila) ifinal=this.fila;

    if(j0<this.columna_inicio) j0=this.columna_inicio;
    else if(jfinal>this.columna) jfinal=this.columna;

    for(var i=i0; i<ifinal; i++) {
      for(var j=j0; j<jfinal; j++) {
        this.obtenerPos(i,j).dibujar();
      }
    }
  }
  this.establecerGrilla = function() {
    for(var i=this.fila_inicio; i<this.fila; i++){
      for(var j=this.columna_inicio; j<this.columna; j++){
        var punto = new Punto(cvs,i*this.multiplicador,j*this.multiplicador);
        this.establecerPos(i,j,new Circulo(cvs,1,punto));
      }
    }
  }
  this.redefinirLimites = function(xi,yi,long,alt) {
    this.limites = new Rectangulo(xi,yi,long*this.multiplicador,alt*this.multiplicador);
  }

  this.obtenerPos = function(i,j) { return this.grilla[i][j];}
  this.obtenerLimites = function() { return this.limites;}
}
