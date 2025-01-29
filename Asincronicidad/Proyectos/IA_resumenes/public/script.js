document.getElementById("consultarBtn").addEventListener("click", async () => {
    const inputConsulta = document.getElementById("consulta").value;
    const respuestaElemento = document.getElementById("respuesta");

    if (!inputConsulta.trim()) {
        respuestaElemento.textContent = "Por favor, ingresa al menos una consulta.";
        return;
    }

    const consultas = inputConsulta.split(",").map(texto => texto.trim());

    try {
        const response = await fetch("/api/consulta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ consultas })
        });

        const data = await response.json();
        respuestaElemento.textContent = data.respuesta || "Error al obtener respuesta.";
    } catch (error) {
        respuestaElemento.textContent = "Error al conectar con el servidor.";
    }
});