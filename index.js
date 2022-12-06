//ARRAY VACIO PARA TRABAJAR CON INFORMACION DEL ARCHIVO JSON
let productos= [];
//DOM PARA CREAR CADA SECCION SEPARADA
const seccTortas = document.getElementById("seccTortas");
const seccAlfajores = document.getElementById("seccAlfajores");
const seccBombones = document.getElementById("seccBombones");
//ASINCRONIA Y FETCH PARA TRAER LOS PRODCUTOS DEL ARCHIVO.JSON Y FILTRO POR SECCION
const buscaProductosJson = async()=>{
    const producto = await fetch(`productos.json`)
    const prodJson = await producto.json();
    productos = prodJson    
    Tortas(productos.filter((el)=> el.categoria == "Torta"));
    Alfajores(productos.filter((el)=> el.categoria == "Alfajor"));
    Bombones(productos.filter((el)=> el.categoria == "Bombon"));            
};
buscaProductosJson();
//FUNCION PARA CREAR ELEMENTOS DINAMICOS Y SU COMPRA EN LA SECCION DE TORTAS
function Tortas(array){
    array.forEach(torta => {
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
            <button type="button" class="btn btn-outline-dark" id="${torta.id}"><strong>Agregar al Carrito</strong></button>`
            contenido.append(cuerpo);
            //AGREGAR AL CARRITO
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
                Toastify({
                    text: "Agregado al Carrito",            
                    duration: 2000,
                    style: {
                        background: "rgb(63,94,251)",
                        background: "radial-gradient(circle, rgba(63,94,251,1) 4%, rgba(164,34,131,1) 85%)",                                
                      },            
                    }).showToast();                                          
               };   
    });
};
//FUNCION PARA CREAR ELEMENTOS DINAMICOS Y SU COMPRA EN LA SECCION DE ALFAJORES
function Alfajores(array){
    array.forEach(alfajor => {
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
        //AGREGAR AL CARRITO
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
        Toastify({
            text: "Agregado al Carrito",            
            duration: 1000,
            style: {
                background: "rgb(63,94,251)",
                background: "radial-gradient(circle, rgba(63,94,251,1) 4%, rgba(164,34,131,1) 85%)",                                
              },            
            }).showToast();                             
        };  
    });
};
//FUNCION PARA CREAR ELEMENTOS DINAMICOS Y SU COMPRA EN LA SECCION DE BOMBONES
function Bombones(array){
    array.forEach(bombon => {
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
        //AGREGAR AL CARRITO
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
        Toastify({
            text: "Agregado al Carrito",            
            duration: 300,
            style: {
                background: "rgb(63,94,251)",
                background: "radial-gradient(circle, rgba(63,94,251,1) 4%, rgba(164,34,131,1) 85%)",                                
              },            
            }).showToast();                                      
        };   
    });
};
//CARRITO DE COMPRAS
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//CONSTRUCCION CARRITO, FUNCIONES Y EVENTOS
const verCarrito = document.getElementById("ver-carrito");
const modalCarrito = document.getElementById("modal-container");
const contadorCarrito = document.getElementById("contadorCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
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
            guardaStorage();
        };                            
        let eliminaProducto = document.createElement("span");
        eliminaProducto.innerText = "❌";
        eliminaProducto.className = "delete-product"
        carritoCont.append(eliminaProducto);
        eliminaProducto.onclick = ()=>{
            eliminarArticulo();
            Toastify({
                text: "Eliminado del Carrito",            
                duration: 1000,
                style: {
                    background: "rgb(228,20,20);",
                    background: "linear-gradient(90deg, rgba(228,20,20,1) 100%, rgba(252,176,69,1) 100%)",                                
                  },            
                }).showToast();                   
        };                
    });          
    actualizarCarrito();
    cerrarCarrito.onclick = ()=>{
        Swal.fire(
            'Cerraste tu Carrito',
            'Quieres seguir comprando?',
            'question'
          )
    };      
};
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
//LOCAL STORAGE PARA CARRITO
const contarCarrito = ()=> {
    contadorCarrito.style.display ="block"
    const carritoLenght = carrito.length;
    localStorage.setItem("carritoLenght", JSON.stringify(carritoLenght));
    contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght"));
 };
 contarCarrito();
 pintarCarrito();
const guardaStorage = () => localStorage.setItem("carrito", JSON.stringify(carrito));
//PAGO DE LA COMPRA
const pagar = document.getElementById("irPagar");
pagar.onclick = ()=>{
    Swal.fire('Compra finalizada con exito'); 
};

