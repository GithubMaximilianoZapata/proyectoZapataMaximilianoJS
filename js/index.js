
// INSTANCIAR CLASE 
class Delicatessen {
    constructor(id, img, nombre, descripcion, precio, cantidad) {
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.descripcion = descripcion;       
        this.precio = precio;
        this.cantidad = cantidad;
    };
};
//INSTANCIAMOS LOS OBJETOS Y GUARDAMOS EN ARRAYS POR TIPO DE PRODUCTOS
const tortas = [tortaEvento = new Delicatessen(1, "./img/torta1-250x250.jpg", "Torta para Evento", "Esta es una torta cubierta por diferentes cremas para eventos de alta concurrencia.", 500, 1),
tortaAgasajo = new Delicatessen(2, "./img/torta2-250x250.jpeg", "Torta para Agasajo", "Esta es una torta cubierta con glace de azucar para eventos de mediana concurrencia.", 350, 1),
tortaPostre = new Delicatessen(3, "./img/torta3-250x250.jpg" , "Torta para Postres", "Esta es una torta con diferentes coberturas y tamaños para eventos de baja concurrencia.", 250, 1)];
const alfajores = [alfajorChocolateNegro = new Delicatessen(4, "./img/alfajores1-250x250.jpg", "Alfajor Artesanal Chocolate Negro", "Alfajores cubiertos por choclate negro rellenos con dulce de leche.", 150, 1),
miniAlfajorChocolateNegro = new Delicatessen(5, "./img/alfajores2-250x250.jpg","Mini Alfajor de Chocolate Negro", "Mini Alfajores cubirtos de chocolate negro rellenos con crema a eleccion.", 130, 1),
alfajorChocolatePremiun = new Delicatessen(6, "./img/alfajores4-250x250.jpeg", "Alfajor de Chocolate Premiun", "Alfajores bañados en chocolate negro o blanco rellenos de dulce a eleccion." , 190, 1),
miniAlfajorChocolatePremiun = new Delicatessen(7,  "./img/alfajores3-250x250.jpg", "Mini Alfajor de Chocolate Premiun", "Mini Alfajores cubirtos de chocolate negro rellenos con crema a eleccion.", 140, 1)];
const bombones = [bombonesChocolateNegro = new Delicatessen(8, "./img/bombones1-250x250.jpg", "Bombones de Chocolate", "Bombones bañados en chocolate negro o blanco con rellenos especiales a eleccion.", 80, 1),
bombonesChocolatePremiun = new Delicatessen(9, "./img/bombones2-250x250.jpg", "Bombones de Chocolate Premiun", "Bombones bañados en chocolate negro rellenos de dulce de leche o cremas a eleccion.", 90, 1)];
//CARRITO DE COMRPAS
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//DOM PARA CREAR PRODUCTOS DINAMICAMENTE
//CREAMOS EL GRUPO TORTAS
const seccTortas = document.getElementById("seccTortas");
const prductosTorta = tortas.forEach((torta)=> {
    const div1 = document.createElement("div");
    div1.className = "col";
    seccTortas.append(div1);
    const contenido = document.createElement("div");
    contenido.className = "card cardTorta";
    contenido.innerHTML = `<img src=${torta.img} class="card-img-top" alt="torta artesanal">`;
    div1.append(contenido);
    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body text-center"
    cuerpo.innerHTML =`
    <h5 class="card-title">${torta.nombre}</h5>
    <p class="card-text">${torta.descripcion}</p>
    <p class="card-text">$ ${torta.precio} el kg</p>
    <button type="button" class="btn btn-outline-dark tor" id="${torta.id}"><strong>Agregar al Carrito</strong></button>
    `    
    contenido.append(cuerpo);
    //AGREGAR AL ARRAY CARRITO SIN REPETIR PRODUCTOS
    const agregaTortas = document.getElementById(`${torta.id}`);
    agregaTortas.onclick = () => {        
        const repite = carrito.some((repiteProd)=>repiteProd.id === torta.id);
        if (repite) {           
            let objeto = carrito.find(item => item.id == torta.id)
            objeto.cantidad += 1
        }
        else {
        carrito.push({ id: torta.id,
            img: torta.img,
            nombre: torta.nombre,
            precio: torta.precio,
            cantidad: torta.cantidad               
        });
        };         
        pintarCarrito();
        contarCarrito();
        guardaStorage();                                          
    };
});
//CREAMOS EL GRUPO ALFAJORES  
const seccAlfajores = document.getElementById("seccAlfajores");
const prductosAlfajores = alfajores.forEach((alfajor)=> {
    const div1 = document.createElement("div");
    div1.className ="col"
    seccAlfajores.append(div1);
    const contenido = document.createElement("div");
    contenido.className = "card cardAlBo";
    contenido.innerHTML = `<img src=${alfajor.img} class="card-img-top" alt="Alfajores Artesanales de gran calidad">`;
    div1.append(contenido);
    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body text-center"
    cuerpo.innerHTML =`
    <h5 class="card-title">${alfajor.nombre}</h5>
    <p class="card-text">${alfajor.descripcion}</p>
    <p class="card-text">$ ${alfajor.precio} la unidad</p>
    <button type="button" class="btn btn-outline-dark" id="${alfajor.id}"><strong>Agregar al Carrito</strong></button>
    `    
    contenido.append(cuerpo);
     //AGREGAR AL ARRAY CARRITO SIN REPETIR PRODUCTOS 
    const agregaAlfajores = document.getElementById(`${alfajor.id}`);
    agregaAlfajores.onclick = () => {
        const repite = carrito.some((repiteProd)=>repiteProd.id === alfajor.id);
        if (repite) {           
            let objeto = carrito.find(item => item.id == alfajor.id)
            objeto.cantidad += 1
        }
        else {
        carrito.push({ id: alfajor.id,
            img: alfajor.img,
            nombre: alfajor.nombre,
            precio: alfajor.precio,
            cantidad: alfajor.cantidad               
        });
        };             
        pintarCarrito();
        contarCarrito();
        guardaStorage();                       
    };  
});
//CREAMOS EL GRUPO BOMBONES
const seccBombones = document.getElementById("seccBombones");
const prductosBombones = bombones.forEach((bombon)=> {
    const div1 = document.createElement("div");
    div1.className = "col";
    seccBombones.append(div1);
    const contenido = document.createElement("div");
    contenido.className = "card cardAlBo";
    contenido.innerHTML = `<img src=${bombon.img} class="card-img-top" alt="Alfajores Artesanales de gran calidad">`;
    div1.append(contenido);
    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body text-center"
    cuerpo.innerHTML =`
    <h5 class="card-title">${bombon.nombre}</h5>
    <p class="card-text">${bombon.descripcion}</p>
    <p class="card-text">$ ${bombon.precio} la unidad</p>
    <button type="button" class="btn btn-outline-dark" id="${bombon.id}"><strong>Agregar al Carrito</strong></button>
    `    
    contenido.append(cuerpo);
     //AGREGAR AL ARRAY CARRITO SIN REPETIR PRODUCTOS 
    const agregaBombones = document.getElementById(`${bombon.id}`);
    agregaBombones.onclick = () => {
       
        const repite = carrito.some((repiteProd)=>repiteProd.id === bombon.id);
        if (repite) {           
            let objeto = carrito.find(item => item.id == bombon.id)
            objeto.cantidad += 1
        }
        else {
        carrito.push({ id: bombon.id,
            img: bombon.img,
            nombre: bombon.nombre,
            precio: bombon.precio,
            cantidad: bombon.cantidad               
        });
        };       
        pintarCarrito();
        contarCarrito(); 
        guardaStorage();                                
    };   
});
//CONSTRUCCION CARRITO EVENTOS CLICK
const verCarrito = document.getElementById("ver-carrito");
const modalCarrito = document.getElementById("modal-container");
const contadorCarrito = document.getElementById("contadorCarrito");

const pintarCarrito = () => {    
    modalCarrito.innerHTML = "";    
    carrito.forEach((product)=>{
        let carritoCont = document.createElement("div");
        carritoCont.className= "modal-cuerpo-carrito";
        carritoCont.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        <input type="number" min = "1" value=${product.cantidad} id="cantidad${product.id}">Kg/unid.                  
        `       
         modalCarrito.append(carritoCont);
        
        let inputCantidad = document.getElementById(`cantidad${product.id}`);               
        inputCantidad.onchange = ()=>{
            console.log(inputCantidad.value);
            let articulo = carrito.find(item => item.id == product.id)
            console.log(articulo);
            articulo.cantidad = parseInt(inputCantidad.value)
            actualizarCarrito();
        };
                            
        let eliminaProducto = document.createElement("span");
        eliminaProducto.innerText = "❌";
        eliminaProducto.className = "delete-product"
        carritoCont.append(eliminaProducto);
        eliminaProducto.onclick = eliminarArticulo;
                
    });          
    actualizarCarrito();        
};
//FUNCIONES
function actualizarCarrito(){
    let total = document.getElementById('total-carrito')
    total.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);    
};

const eliminarArticulo = () => {
    const foundId = carrito.find((el)=>el.id);    
    carrito = carrito.filter((carritoId)=> {
        return carritoId !== foundId        
    });
    guardaStorage();      
    pintarCarrito();
    actualizarCarrito();        
    contarCarrito();     
};
//LOCAL STORAGE
const contarCarrito = ()=> {
    contadorCarrito.style.display ="block"
    const carritoLenght = carrito.length;
    localStorage.setItem("carritoLenght", JSON.stringify(carritoLenght));
    contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght"));
 };
 contarCarrito();
 pintarCarrito();

const guardaStorage = () => localStorage.setItem("carrito", JSON.stringify(carrito));
