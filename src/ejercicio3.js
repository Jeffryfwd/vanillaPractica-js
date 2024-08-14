function clonarArreglo(arreglo) {
    return [...arreglo];
}
const arreglo = [1,2,3,4];
const arregloClonado = clonarArreglo(arreglo);
console.log(arregloClonado);
//-----------------------------------------------

function clonarObjeto(objeto) {
    return{...objeto}
    
}
const objeto={
    nombre: 'jeff',
    apellido: 'medina'
};
const objetoClonado=clonarObjeto(objeto)
console.log(objetoClonado);




// NO MODIFICAR
//export { clonarArreglo, clonarObjeto, sumar, saludar };