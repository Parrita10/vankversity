const express = require('express');

const app = express();
const PORT = 3000;
const API_KEY = 'AIzaSyDNclvZ592Is0sBvT7kALtUUgU7KtPP5VA'; 

app.use(express.static('public'));
app.use(express.json());

async function llamarGemini(prompt) {
    const fetch = (await import('node-fetch')).default; // no tengo node en la version actualizada entonces lo debo importar de forma dinamica
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    return await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
    })
    .then(datos => datos.candidates[0].content.parts[0].text)
    .catch(error => {
        console.error('Error en la API de Gemini:', error);
        return "Error al obtener la respuesta.";
    });
}

// Ruta para manejar la solicitud desde el frontend
app.post('/api/consulta', async (req, res) => {
    const { consultas } = req.body;

    if (!consultas || !Array.isArray(consultas) || consultas.length === 0) {
        return res.status(400).json({ error: "Debes proporcionar una consulta!" });
    }

    Promise.race(consultas.map(llamarGemini))
        .then(respuesta => res.json({ respuesta }))
        .catch(error => res.status(500).json({ error: "Error en la consulta", detalles: error.message }));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

































// async function llamarGemini(prompt) {
//     const fetch = (await import('node-fetch')).default; //ya que estamos trabajando con node debemos instalar el modulo de fetch para poder hacer las peticiones
//     const API_KEY = 'AIzaSyDNclvZ592Is0sBvT7kALtUUgU7KtPP5VA';
//     const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  
//     return  await fetch(URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         contents: [{
//           parts: [
//             { text: prompt }
//           ]
//         }]
//       })
//     })
//     .then(respuesta => {
//       if (!respuesta.ok) {
//         throw new Error(`Error HTTP: ${respuesta.status}`);
//       }
//       return respuesta.json();
//     })
//     .then(datos => {
//       const textoGenerado = datos.candidates[0].content.parts[0].text;
      
//       return textoGenerado;
//     })
//     .catch(error => {
//       console.error('Error al llamar a la API de Gemini:', error);
//     });
//   }



// Promise.race([llamarGemini("resumen la segunda guerra "),llamarGemini("resumen la vida de cr7"),llamarGemini("la fecha de hoy")])
// .then((resultado)=>{
//     console.log("respuesta mas rapida: ")
//     console.log(resultado)
// }).catch((error)=>{
//     console.log(error)

// })




