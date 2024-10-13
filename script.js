// Control del carrusel de imágenes y datos
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let prevBtn = document.querySelectorAll(".prevBtn");
    let nextBtn = document.querySelectorAll(".nextBtn");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");

    prevBtn.forEach((prev) => {
        prev.addEventListener("click", function() {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            showSlides();
        });
    });

    nextBtn.forEach((next) => {
        next.addEventListener("click", function() {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            showSlides();
        });
    });

    setTimeout(function() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlides();
    }, 5000);
}

// Control del calendario para agendar citas
document.getElementById("agendarCita").addEventListener("click", function() {
    const calendario = document.getElementById("calendario");
    if (calendario.style.display === "none" || calendario.style.display === "") {
        calendario.style.display = "block"; // Muestra el calendario
    } else {
        calendario.style.display = "none"; // Oculta el calendario
    }
});

// Validación del formulario de registro
document.querySelector(".formulario").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidoP = document.getElementById("apellidoP").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validación simple
    if (nombre === "" || apellidoP === "" || !validarEmail(email)) {
        alert("Por favor, completa todos los campos correctamente.");
        event.preventDefault(); // Evita que el formulario se envíe si hay errores
    }
});

// Función para validar correos electrónicos
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Control para el botón de comprar
document.getElementById("comprar").addEventListener("click", function() {
    let metodoPago = prompt("Elige tu método de pago: Tarjeta de crédito, débito, etc.");
    if (metodoPago) {
        alert("Has seleccionado el método de pago: " + metodoPago);
        // Aquí puedes redirigir a una página de pago o procesar la información
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    // Lógica para cambiar al mes anterior
});

document.querySelector('.next').addEventListener('click', () => {
    // Lógica para cambiar al siguiente mes
});
// Inicializa el carrusel
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 6000,
    },
});