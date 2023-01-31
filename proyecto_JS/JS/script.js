console.log("Bienvenido a compra y venta de dolar blue");


function precio( accion , dolars ){
    if(accion == 1){
        let precio = dolars * 386;
        return precio
    }
    else if(accion == 2){
        let precio = dolars * 382;
        return precio
    }
    else{
        alert("por favor, indique un valor valido" )
    }
}
 




let accion = prompt("indique con 1 si quiere comprar dolares, 2 si desea vender, y 3 para salir ");
accion = parseInt(accion);

while(accion == 3, accion == 3){

    console.log( " perfecto, vuelva si cambia de opinión ");
    accion = prompt("indique con 1 si quiere comprar dolares, 2 si desea vender, y 3 para salir ");
    
}


let dolars = prompt("Genial, diganos cuanto tiene en mente ");
dolars = parseInt(dolars);

let total = dolars + precio(accion , dolars)

console.log("el total seria ", total);


while(total > 0){
    alert( "gracias por elegirnos, que tenga un buen día ");
    
   }

