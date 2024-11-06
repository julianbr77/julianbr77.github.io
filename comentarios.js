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
        nuevoComentario.innerHTML = `
            <p><strong>${nombre}</strong></p>
            <p><strong>Servicio:</strong> ${servicio}</p>
            <p><strong>Calificación:</strong> ${'⭐'.repeat(calificacion)}</p>
            <p>"${comentario}"</p>
        `;

        // Agregar el nuevo comentario al inicio de la lista
        listaComentarios.prepend(nuevoComentario);

        // Limpiar el formulario
        commentForm.reset();
    });
});
