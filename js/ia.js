function IA() {

  this.reubicar = function(posX,posY) {
    var u = {x: posX,y:posY};
    u.x = this.reubicarCuentas(u.x);
    u.y = this.reubicarCuentas(u.y);
    return u;
  }
  this.reubicarCuentas = function(numero) {
    var temp = numero;
    if( temp % 10 <= 5 ) temp = temp - (temp % 10);
    else temp = temp + (10 - (temp % 10));
    return temp;
  }
  // El parametro debe ser boolean.
  this.opuesto = function(b) {
    return !b;
  }

}
