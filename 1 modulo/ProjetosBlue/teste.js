function copy(o){
    var copy = Object.create( Object.getPrototypeOf(o) );
    var propNames = Object.getOwnPropertyNames(o);
  
    propNames.forEach(function(name){
      var desc = Object.getOwnPropertyDescriptor(o, name);
      Object.defineProperty(copy, name, desc);
    });
  
    return copy;
  }

  votosValidos = [{contadorVotos: 0, numero:1, porcentagem: 0}, {contadorVotos: 0, numero:2, porcentagem: 0}, {contadorVotos: 0, numero:3, porcentagem: 0}]
  var primeiroTurno = copy(votosValidos);
  //console.log(primeiroTurno);