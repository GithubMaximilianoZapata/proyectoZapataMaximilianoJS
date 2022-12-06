//RESETEO DE CARRITO Y FORMULARIO CUANDO SE PAGA
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const pagar = document.getElementById("pagar");
const resetForm = document.getElementById("formulario");
    pagar.onclick = () => {       
    Swal.fire('Compra finalizada con exito');    
    carrito = [];
    carrito = localStorage.clear();
    resetForm.reset();
    total.innerText = 0;      
};
//MOSTRAR EL TOTAL DEL CARRITO A PAGAR
const total = document.getElementById('total-compra');
total.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0); 


    