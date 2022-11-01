/// INICIALIZAR VARIABLES GLOBALES 
let costoTotalCompra = 0;
let flag;
let total;
let operacion;
let opcion;
let cantidad;
// INSTANCIAR CLASE 
class Delicatessen {
    constructor(nombre, precio, descuento) {
        this.nombre = nombre;       
        this.precio = precio;
        this.descuento = descuento;
    };
//METODOS
    ventaArticulos (cantidad) {               
        if (cantidad >= 12) {        
            return total = costoTotalCompra += (parseFloat(this.precio * cantidad * this.descuento));    
        } else {
               return total =  costoTotalCompra +=  parseInt(cantidad * this.precio);    
        }   
    };    
    salidaVenta (nombre, cantidad, precio, venta) {            
        if (nombre == tortaEvento.nombre && cantidad < 12 || nombre == tortaAgasajo.nombre && cantidad < 12 || nombre == tortaPostre.nombre && cantidad < 12) { 
            return(`${nombre} son ${cantidad} kg a $ ${precio} pesos el kilo; el total de su compra $ ${venta} pesos`); 
        }        
        else if (nombre == tortaEvento.nombre && cantidad >= 12 || nombre == tortaAgasajo.nombre && cantidad >= 12 || nombre == tortaPostre.nombre && cantidad >= 12) {
            return(`${nombre} son ${cantidad} kg a $ ${precio} pesos el kilo menos descuento por cantidad; el total de su compra $ ${venta} pesos`); 

        }        
        else if (nombre != tortaEvento.nombre && cantidad <12 || nombre != tortaAgasajo.nombre && cantidad < 12 || nombre != tortaPostre.nombre && cantidad < 12) {
            return(`${nombre} son ${cantidad} unidades a $ ${precio} pesos la unidad; el total de su compra $ ${venta} pesos`); 
        } 
        else {
            return(`${nombre} son ${cantidad} unidades a $ ${precio} pesos la unidad menos descuento por cantidad; el total de su compra $ ${venta} pesos`); 
        }
    };    
};
//INSTANCIAMOS LOS OBJETOS Y GUARDAMOS EN UN ARRAY
const mercaderia = [tortaEvento = new Delicatessen("1-Torta para Evento", 500, 0.90),
 tortaAgasajo = new Delicatessen("2-Torta para Agasajo", 350, 0.95),
 tortaPostre = new Delicatessen("3-Torta para Postres", 250, 0.97),
 alfajorChocolateNegro = new Delicatessen("1-Alfajor Artesanal Chocolate Negro", 150, 0.95),
 miniAlfajorChocolateNegro = new Delicatessen("2-Mini Alfajor de Chocolate Negro", 130, 0.97),
 alfajorChocolatePremiun = new Delicatessen("3-Aljafor de Chocolate Premiun", 190, 0.90),
 miniAlfajorChocolatePremiun = new Delicatessen("4-Mini Alfajor de Chocolate Premiun", 140, 0.95),
 bombonesChocolateNegro = new Delicatessen("1-Bombones de Chocolate Negro", 80, 0.97),
 bombonesChocolatePremiun = new Delicatessen("2-Bombones de Chocolate Premiun", 90, 0.95)];
//METODOS DE ARRAY PARA VER OPCIONES
const articulosNombre = mercaderia.map(articulo=>articulo.nombre);
const verTortas = articulosNombre.slice(0,3);
const verAlfajores = articulosNombre.slice(3,7);
const verBombones = articulosNombre.slice(7,9);
//MENU PARA QUE ELIJA EL CLIENTE
const menu = ["1-Tortas", "2-Alfajores", "3-Bombones", "4-No deseo comprar"];
//CARRITO DE COMRPAS
const carritoCompra = [];

//CICLO DO WHILE PARA SIMULAR LA COMPRA DE PRODUCTOS
do {
    //MENU DE PRODUCTOS PARA COMPRAR O CONSULTAR
    alert(`Elija lo que desea comprar: \n ${menu.join(" \n")}`);
    const eleccion = parseInt(prompt(`Ingrese el número de opcion que desea`));           
    //SI NO DESEA COMPRAR MARCANDO 4
     if (eleccion == 4) {
         alert(`Muchas Gracias Por Su Visita!!!`);
    break;         
    }     
    //SI MARCA OPCION INCORRECTA (NO HEMOS VISTO TRATAMIENTO DE ERRORES) PREGUNTA SI DESEA COMPRAR O NO  
    else if (eleccion < 1 || eleccion > 4) {
        alert(`Elija una opcion correcta del menu entre 1 y 4.
        Presione "Y" para continuar su compra o "N" para Salir`);
    }
    //SI ELIGE ALGUN PRODUCTO DEL MENU ENTRA AL CICLO DE COMPRAS
    else (eleccion >= 1 && eleccion <= 3); {             
    //SWITCH CON CADA TIPO DE PRODUCTO Y SU CASUISTICA, ARMA ARRAY CARRITO DE COMPRA AL FINALIZAR LA COMPRA
        switch (eleccion) {
            case (1):
                console.log(`Elija el articulo que desea comprar: \n ${verTortas.join("\n")}`);
                opcion = parseInt(prompt(`Ingrese el numero de su articulo`));
                cantidad = parseInt(prompt(`De Cuantos Kg Quiere Su Torta?`));
                if (opcion == 1) {
                venta = tortaEvento.ventaArticulos(cantidad);                
                compra = tortaEvento.salidaVenta(tortaEvento.nombre, cantidad, tortaEvento.precio, venta.toFixed(2));
                carritoCompra.push(compra);
                }else if (opcion == 2){
                    venta = tortaAgasajo.ventaArticulos(cantidad);
                    compra = tortaAgasajo.salidaVenta(tortaAgasajo.nombre, cantidad, tortaAgasajo.precio, venta.toFixed(2));                  
                    carritoCompra.push(compra);
                } else {
                    venta = tortaPostre.ventaArticulos(cantidad);
                    compra = tortaPostre.salidaVenta(tortaPostre.nombre, cantidad, tortaPostre.precio,  venta.toFixed(2));
                    carritoCompra.push(compra);   
                };
                break;
            case (2):
                console.log(`Elija el articulo que desea comprar: \n ${verAlfajores.join("\n")}`);
                opcion = parseInt(prompt`Ingrese el numero de su articulo`);
                cantidad =parseInt(prompt("Cuantas Unidades Desea Comprar?"))
                if (opcion == 1) {
                    venta = alfajorChocolateNegro.ventaArticulos(cantidad);
                    compra = alfajorChocolateNegro.salidaVenta(alfajorChocolateNegro.nombre, cantidad, alfajorChocolateNegro.precio, venta.toFixed(2));    
                    carritoCompra.push(compra); 
                }else if (opcion == 2){
                    venta = miniAlfajorChocolateNegro.ventaArticulos(cantidad);
                    compra = miniAlfajorChocolateNegro.salidaVenta(miniAlfajorChocolateNegro.nombre, cantidad, miniAlfajorChocolateNegro.precio, venta.toFixed(2));    
                    carritoCompra.push(compra);
                } else if (opcion == 3) {
                    venta = alfajorChocolatePremiun.ventaArticulos(cantidad);
                    compra =alfajorChocolatePremiun.salidaVenta(alfajorChocolatePremiun.nombre, cantidad, alfajorChocolatePremiun.precio, venta.toFixed(2));    
                    carritoCompra.push(compra); 
                } else {
                    venta = miniAlfajorChocolatePremiun.ventaArticulos(cantidad);
                    compra = miniAlfajorChocolatePremiun.salidaVenta(miniAlfajorChocolatePremiun.nombre, cantidad, miniAlfajorChocolatePremiun.precio, venta.toFixed(2));    
                    carritoCompra.push(compra); 
                };
                break;
            case (3):
                console.log(`Elija el articulo que desea comprar: \n ${verBombones.join("\n")}`);
                opcion = parseInt(prompt`Ingrese el numero de su articulo`);
                cantidad =parseInt(prompt("Cuantas Unidades Desea Comprar?"))
                if (opcion == 1) {
                    venta = bombonesChocolateNegro.ventaArticulos(cantidad);                
                    compra = bombonesChocolateNegro.salidaVenta(bombonesChocolateNegro.nombre, cantidad, bombonesChocolateNegro.precio, venta.toFixed(2)); 
                    carritoCompra.push(compra);
                }else {
                    venta = bombonesChocolatePremiun.ventaArticulos(cantidad);                
                    compra = bombonesChocolatePremiun.salidaVenta(bombonesChocolatePremiun.nombre, cantidad, bombonesChocolatePremiun.precio, venta.toFixed(2)); 
                    carritoCompra.push(compra);                
                };                                                    
                break;           
            default:
                break;            
        };    
    /*REPREGUNTA AL USUARIO SI DESEA SEGUIR COMPRANDO O NO CON METODO STRING UPPER PARA NO ROMPER CICLO
    SI EL USUARIO INGRESA LA OPCION EN MINUSCULA
    (CONTINUA CICLO O FINALIZA LA COMPRA MOSTRANDO EL ARRAY CARRITO DE COMPRA)*/
    flag = prompt("¿Desea continuar comprando? Y/N");
        if (flag.toUpperCase() == "N"){
            console.log(carritoCompra.join(`\n`));
        };
    };         
    //WHILE CON METODO STRING UPPER POR SI USURIO INGRESA Y O N MINUSCULA NO ROMPA EL CICLO    
} while (flag.toUpperCase() == "Y");                    


