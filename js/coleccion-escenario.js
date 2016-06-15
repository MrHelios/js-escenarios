function coleccionEscenario(max) {
  Coleccion.call(this,max);

  // Dibuja parte del grillado.
  this.dibujarOpt = function(i0,j0,ifinal,jfinal) {
    this.objetos[0].dibujar();
    this.objetos[1].dibujarParte(i0,j0,ifinal,jfinal);
    var i=2;
    while(i<this.cant) {
      this.objetos[i].dibujar();
      i++;
    }
  }

}
