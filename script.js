window.onload = function() {
    // Verificación de los elementos antes de agregar event listeners
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function() {
            alert("Gracias por tu interés en Negsystem. ¡Pronto habrá más información disponible!");
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            alert(`Gracias ${nombre}, hemos recibido tu mensaje:\n${mensaje}\nNos pondremos en contacto contigo a través de ${email}.`);
        });
    }

    // Función para manejar el modal de login y registro
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");

    window.openLoginModal = function() {
        if (loginModal) {
            loginModal.style.display = "block";
        }
    };

    window.closeLoginModal = function() {
        if (loginModal) {
            loginModal.style.display = "none";
        }
    };

    window.openSignupModal = function() {
        if (signupModal) {
            signupModal.style.display = "block";
        }
    };

    window.closeSignupModal = function() {
        if (signupModal) {
            signupModal.style.display = "none";
        }
    };

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        } else if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    };

    // Manejador del formulario de comentarios
    const comentariosForm = document.getElementById("comentariosForm");
    if (comentariosForm) {
        comentariosForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const comentario = document.getElementById("comentario").value;
            alert(`Gracias por tu comentario:\n${comentario}`);
            comentariosForm.reset();
        });
    }

    // Inicialización del mapa
    const map = L.map('map').setView([4.6, -74.1], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Obtener el botón de búsqueda y el campo de texto
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    // Verificación de los elementos de búsqueda
    console.log("searchButton:", searchButton); // Verifica si el botón está en el DOM
    console.log("searchInput:", searchInput);   // Verifica si el input está en el DOM

    // Si searchButton está presente, añadir el evento
    if (searchButton) {
        searchButton.addEventListener("click", function() {
            const query = searchInput.value;
            if (query) {
                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length > 0) {
                            const location = data[0];
                            map.setView([location.lat, location.lon], 14);
                            L.marker([location.lat, location.lon]).addTo(map)
                                .bindPopup(location.display_name)
                                .openPopup();
                        } else {
                            alert("No se encontraron resultados para la dirección proporcionada.");
                        }
                    })
                    .catch(error => {
                        console.error("Error en la búsqueda de dirección:", error);
                    });
            }
        });
    } else {
        console.error("searchButton no encontrado en el DOM.");
    }
};
