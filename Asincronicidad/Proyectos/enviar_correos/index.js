const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Cargar variables de entorno desde .env

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json()); // Permite recibir JSON en las peticiones

// Configuración del transporte SMTP con Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Usa la variable de entorno para el correo
    pass: process.env.PASSWORD // Contraseña de aplicación de Gmail
  }
});

// Ruta para enviar correos con un bucle
app.post('/api/enviar-correo', async (req, res) => {
  const { destinatarios, asunto, mensaje, cantidad } = req.body;

  if (!destinatarios || !Array.isArray(destinatarios) || destinatarios.length === 0) {
    return res.status(400).json({ error: "Debes proporcionar una lista de destinatarios." });
  }

  if (!cantidad || cantidad < 1) {
    return res.status(400).json({ error: "Debes proporcionar una cantidad válida." });
  }

  let arregloPromesas = [];

  for (let i = 0; i < cantidad; i++) {
    destinatarios.forEach(email => {
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `${asunto} (Intento ${i + 1})`,
        text: mensaje
      };
      arregloPromesas.push(transporter.sendMail(mailOptions));
    });
  }

  Promise.all(arregloPromesas)
    .then(resultados => res.json({ message: `Correos enviados ${cantidad} veces`, detalles: resultados }))
    .catch(error => res.status(500).json({ error: "Error al enviar los correos", detalles: error.message }));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});






























// const nodemailer = require('nodemailer');
// // Configurar el transporte SMTP con Gmail
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "andresparra11.07@gmail.com", // Tu correo de Gmail
//     pass: "ikcw tsir skta selp" // Debes generar una "contraseña de aplicaciones"
//   }
// });

// // Configuración del email
// const mailOptions = {
//   from: "andresparra11.07@gmail.com",
//   to: "juanftoro2503@gmail.com,andresparra11.07@gmail.com",
//   subject: "¡Hola desde Nodemailer!",
//   text: "Este es un correo de prueba enviado con Nodemailer en Node.js"
// };

// // Enviar el email
// async function enviarCorreo() {
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Correo enviado: " + info.response);
//   } catch (error) {
//     console.error("Error al enviar el correo: ", error);
//   }
// }

// let arregloPromesas=[]

// for (let x=0;x<10;x++){
//     arregloPromesas.push(enviarCorreo())
// }

// Promise.all(arregloPromesas)

