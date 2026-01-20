//1.Mensaje de contacto
function mostrarMensaje(){
    alert("gracias por contactar a Helados Baque. Pronto responderemos tu mensaje");
}

//2.Resaltar página activa del munu
const enlaces=document.querySelectorAll("nav a");

enlaces.forEach(enlace=>{
    if(enlace.href===window.location.href){
        enlace.style.backgroundColor="#ff5d8f";
        enlace.style.padding="5px 10px";
        enlace.style.borderRadius="5px";
    }
});

//3.Mostrar informacion del producto seleccionado
function mostrarProducto(sabor){
    alert("Has seleccionado helado de" +sabor+".Elaborado con ingredientes naturales.");
}

//4.Saludo dinamico segun la hora
const hora=newDate().getHours();
let saludo="";

if (hora<12){
    saludo="Buenos dias";
} else if (hora<18){
    saludo="Buenas tardes";
}else{
    saludo="Buenas noches";
}

console.log(saludo+ ",bienvenido a Helados Baque");