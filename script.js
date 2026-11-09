// Mensaje de bienvenida
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio Cyberpunk cargado correctamente");

    const botones = document.querySelectorAll(".btn");

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            console.log("Botón presionado");
        });
    });
});
