require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurar Express para servir archivos estáticos y usar EJS
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Definir URLs de las APIs
const API_OPENWEATHER = `https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=${process.env.API_OPENWEATHER}&units=metric&lang=es`;
const API_METNO = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.2518&lon=-75.5636";

// Ruta para obtener y mostrar el clima en la vista
app.get("/", async (req, res) => {
    try {
        const resultado = await Promise.race([
            axios.get(API_OPENWEATHER), // OpenWeatherMap será la opción más rápida
            axios.get(API_METNO, {
                headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
            }) // MET.NO con User-Agent
        ]);

        console.log("✅ API utilizada:", resultado.config.url);

        let clima;

        if (resultado.config.url.includes("openweathermap")) {
            console.log("🌍 Datos obtenidos desde OpenWeatherMap");
            const datos = resultado.data;
            clima = {
                ciudad: datos.name,
                pais: datos.sys.country,
                temperatura: datos.main.temp,
                descripcion: datos.weather[0].description,
                humedad: datos.main.humidity,
                icono: `http://openweathermap.org/img/wn/${datos.weather[0].icon}.png`,
                viento: datos.wind.speed
            };
        } else {
            console.log("🌍 Datos obtenidos desde MET.NO");
            const datos = resultado.data;
            clima = {
                ciudad: "Medellín",
                pais: "Colombia",
                temperatura: datos.properties.timeseries[0].data.instant.details.air_temperature,
                descripcion: "Datos obtenidos desde MET.NO",
                humedad: datos.properties.timeseries[0].data.instant.details.relative_humidity,
                icono: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
                viento: datos.properties.timeseries[0].data.instant.details.wind_speed
            };
        }

        res.render("index", { clima });
    } catch (error) {
        console.error("❌ ERROR AL OBTENER EL CLIMA:", error.message);
        res.render("index", { clima: null, error: `Error: ${error.message}` });
    }
});



//----------------------------------------------------------------------------------------------
//Prueba de que la API de MET.NO funciona. 

// app.get("/", async (req, res) => {
//     try {
//         // Hacer SOLO la solicitud a MET.NO
//         const resultado = await axios.get(API_METNO, {
//             headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
//         });

//         console.log("✅ API utilizada:", resultado.config.url);

//         const datos = resultado.data;
//         const clima = {
//             ciudad: "Medellín",
//             pais: "Colombia",
//             temperatura: datos.properties.timeseries[0].data.instant.details.air_temperature,
//             descripcion: "Datos obtenidos desde MET.NO",
//             humedad: datos.properties.timeseries[0].data.instant.details.relative_humidity,
//             icono: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
//             viento: datos.properties.timeseries[0].data.instant.details.wind_speed
//         };

//         res.render("index", { clima });
//     } catch (error) {
//         console.error("❌ ERROR AL OBTENER EL CLIMA DESDE MET.NO:", error.message);
//         if (error.response) {
//             console.error("🔴 Status Code:", error.response.status);
//             console.error("🔴 Respuesta API:", error.response.data);
//         }
//         res.render("index", { clima: null, error: `Error: ${error.message}` });
//     }
// });
//----------------------------------------------------------------------------------------------


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
