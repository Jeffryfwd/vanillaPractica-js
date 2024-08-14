class contador {
  constructor(valor) {
    this.valor=valor;
    this.valor=1

    
  }
siguiente(){
  this.valor++;
  return this.valor;
}
}
let instancia= new contador()
console.log(instancia.siguiente());
