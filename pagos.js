document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtén los valores del formulario
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const postalCode = document.getElementById("postal-code").value;

    // Validación simple para asegurarse de que los campos no estén vacíos
    if (!cardNumber || !expiryDate || !cvv || !postalCode) {
        // Si algún campo está vacío, muestra un mensaje de error
        document.getElementById("payment-result").innerHTML = "<p style='color: red;'>Por favor, completa todos los campos.</p>";
        return; // Detiene el proceso de envío del formulario
    }

    // Validación del número de tarjeta (puedes ajustarlo para ser más específico si lo deseas)
    const cardNumberPattern = /^[0-9]{16}$/; // 16 dígitos
    if (!cardNumberPattern.test(cardNumber)) {
        document.getElementById("payment-result").innerHTML = "<p style='color: red;'>Número de tarjeta inválido. Debe tener 16 dígitos.</p>";
        return;
    }

    // Validación de la fecha de vencimiento (MM/AA)
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
    if (!expiryPattern.test(expiryDate)) {
        document.getElementById("payment-result").innerHTML = "<p style='color: red;'>Fecha de vencimiento inválida. Debe ser en formato MM/AA.</p>";
        return;
    }

    // Validación del CVV (3 dígitos)
    const cvvPattern = /^[0-9]{3}$/;
    if (!cvvPattern.test(cvv)) {
        document.getElementById("payment-result").innerHTML = "<p style='color: red;'>CVV inválido. Debe tener 3 dígitos.</p>";
        return;
    }

    // Validación del código postal (5 dígitos)
    const postalCodePattern = /^[0-9]{5}$/;
    if (!postalCodePattern.test(postalCode)) {
        document.getElementById("payment-result").innerHTML = "<p style='color: red;'>Código postal inválido. Debe tener 5 dígitos.</p>";
        return;
    }

    // Si todos los campos son correctos, muestra un mensaje de éxito
    document.getElementById("payment-result").innerHTML = "<p style='color: green;'>Pago Aceptado. ¡Gracias por tu compra!</p>";

    // Redirecciona a la página de inicio después de 2 segundos
    setTimeout(function() {
        window.location.href = "index.html";
    }, 2000); // Cambia 2000 a otro valor en milisegundos si deseas más o menos tiempo de espera
});
