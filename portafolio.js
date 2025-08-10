//variables
let perfil = document.getElementById('contenedor');
let imagen = document.getElementById('imagenPerfil');
let texto = document.getElementById('parrafo');
let snake = document.getElementById('snake');
let pong = document.getElementById("pong");

pong.addEventListener("click", ()=>{
    window.open("pong.html", "_blank");
});

snake.addEventListener("click", () =>{
    window.open("snake.html", "_blank");
});



imagen.addEventListener('click', () =>{
    imagen.style.opacity="0.8";
    imagen.innerHTML = `
    <img height=100% width =100% src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'>
    `;
    
}); 

