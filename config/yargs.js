const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: "10"
    }
}

const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de la base ingresada", opts)
    .command("crear", "Guarda en un archivo la tabla con un limite", opts).help().argv;


module.exports = {
    argv
}