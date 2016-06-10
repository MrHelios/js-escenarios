Actualizador = function() {

  if(o.activo) {
    tablero.limpiar();
    obj.dibujarTodo();
  }

  setTimeout(Actualizador,50);
}
