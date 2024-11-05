document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById("learnMoreBtn");

    learnMoreBtn.addEventListener("click", function() {
        alert("Gracias por tu interés en Negsystem. ¡Pronto habrá más información disponible!");
    });

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        alert(`Gracias ${nombre}, hemos recibido tu mensaje:\n${mensaje}\nNos pondremos en contacto contigo a través de ${email}.`);
    });

    // Modales de Login y Crear Cuenta
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");

    window.openLoginModal = function() {
        loginModal.style.display = "block";
    };

    window.closeLoginModal = function() {
        loginModal.style.display = "none";
    };

    window.openSignupModal = function() {
        signupModal.style.display = "block";
    };

    window.closeSignupModal = function() {
        signupModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        } else if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    };

    const comentariosForm = document.getElementById("comentariosForm");

    comentariosForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const comentario = document.getElementById("comentario").value;
        alert(`Gracias por tu comentario:\n${comentario}`);
        comentariosForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById("learnMoreBtn");

    learnMoreBtn.addEventListener("click", function() {
        alert("Gracias por tu interés en Negsystem. ¡Pronto habrá más información disponible!");
    });

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        alert(`Gracias ${nombre}, hemos recibido tu mensaje:\n${mensaje}\nNos pondremos en contacto contigo a través de ${email}.`);
    });

    // Manejo del formulario de comentarios
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");

    if (commentForm) {
        commentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const comentario = document.getElementById("comentario").value;

            // Crear un nuevo elemento para el comentario
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `<strong>${nombre}</strong>: <p>${comentario}</p>`;
            
            // Agregar el comentario a la lista
            commentsList.prepend(commentElement);

            // Limpiar el formulario
            commentForm.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("commentForm");
    const listaComentarios = document.getElementById("lista-comentarios");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const servicio = document.getElementById("servicio").value;
        const calificacion = document.querySelector('input[name="calificacion"]:checked').value;
        const comentario = document.getElementById("comentario").value;

        // Crear un nuevo comentario
        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");
        nuevoComentario.innerHTML = `<strong>${nombre}</strong> (Calificación: ${calificacion})<br>
                                     Servicio: ${servicio}<br>
                                     Comentario: ${comentario}<br>`;
        
        // Agregar el nuevo comentario a la lista
        listaComentarios.appendChild(nuevoComentario);

        // Limpiar el formulario
        commentForm.reset();
    });
});
