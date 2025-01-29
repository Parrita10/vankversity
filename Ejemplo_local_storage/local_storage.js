//guardado de datos
localStorage.setItem("usuario", "vankversity");
//lectura de datos
const nombreUsuario = localStorage.getItem("usuario");
console.log("NOMBRE USUARIO ", nombreUsuario);
//eliminación de datos
localStorage.removeItem("usuario");

