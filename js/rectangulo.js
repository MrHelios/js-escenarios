function Rectangulo(canvas,pi,l,h) {
  Tablero.call(this,canvas)
  this.puntoI = pi;
  this.longitud = l;
  this.altura = h;
  this.color = "black";

  this.establecerPI = function(pi) {
    this.puntoI = pi;
  }
  this.establecerLongitud = function(l) {
    this.longitud = l;
  }
  this.establecerAltura = function(h) {
    this.altura = h;
  }
  this.dibujar = function() {
    this.lienzo.beginPath();
    this.lienzo.strokeStyle = this.color;
    this.lienzo.rect(this.puntoI.obtenerX(),this.puntoI.obtenerY(),this.longitud,this.altura);
    this.lienzo.stroke();
  }

  this.obtenerPI = function() { return this.puntoI;}
  this.obtenerLongitud = function() { return this.longitud;}
  this.obtenerAltura = function() { return this.altura;}
  this.clone = function() {
    return new Rectangulo(this.ID,this.puntoI.clone(),this.longitud,this.altura);
  }
  this.equals = function(rect) {
    return (this.puntoI.equals(rect.obtenerPI()) &&
            this.longitud == rect.obtenerLongitud() &&
            this.altura == rect.obtenerAltura());
  }

}
