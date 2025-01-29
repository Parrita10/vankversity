document.getElementById("enviarBtn").addEventListener("click", async () => {
    const inputDestinatarios = document.getElementById("destinatarios").value;
    const inputAsunto = document.getElementById("asunto").value;
    const inputMensaje = document.getElementById("mensaje").value;
    const inputCantidad = document.getElementById("cantidad").value;
    const estadoElemento = document.getElementById("estado");

    if (!inputDestinatarios.trim() || !inputAsunto.trim() || !inputMensaje.trim() || inputCantidad < 1) {
        estadoElemento.textContent = "Por favor, completa todos los campos correctamente.";
        return;
    }

    const destinatarios = inputDestinatarios.split(",").map(email => email.trim());
    const cantidad = parseInt(inputCantidad, 10);

    try {
        const response = await fetch("/api/enviar-correo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                destinatarios,
                asunto: inputAsunto,
                mensaje: inputMensaje,
                cantidad
            })
        });

        const data = await response.json();
        estadoElemento.textContent = data.message || "Error al enviar correos.";
    } catch (error) {
        estadoElemento.textContent = "Error al conectar con el servidor.";
    }
});