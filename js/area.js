
// Funcion ideada para crear el grillado del escenario.
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

  this.obtenerFila_Inicio = function() { return this.fila_inicio;}
  this.obtenerColumna_Inicio = function() { return this.columna_inicio;}
  this.obtenerFila = function() { return this.obtenerLong()/this.multiplicador;}
  this.obtenerColumna = function() { return this.obtenerAltura()/this.multiplicador;}
  this.obtenerMultiplicador = function() { return this.multiplicador;}

}

// Funcion que hereda de Area.
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

  this.grilla = new Array();
  for(var i=0;i<=this.fila;i++) {
    this.grilla.push(new Array());
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

// Funcion que herada de Area.
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
