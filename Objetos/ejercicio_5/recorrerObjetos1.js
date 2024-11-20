// Objeto inicial
const usuarios = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
};

// Contar usuarios habilitados
let habilitados = 0;

for (const id in usuarios) {
    if (usuarios[id] === "habilitado") {
        habilitados++;
    }
}

// Mostrar la cantidad de usuarios habilitados
console.log(`Número de usuarios habilitados: ${habilitados}`);
