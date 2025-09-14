const chalk = require('chalk');

const TiaVecina = require('./tiaVecina');
const compañera = require('./compañera');
const estudiante = require('./estudianteEspia');
const Chismosa = require('./chismosa');

const t1 = new TiaVecina("Doña Rosa", 8, 6);
const c1 = new compañera("Valentina", 4, 8);
const e1 = new estudiante("Michel", 6, 4);

const chismosas = [t1, c1, e1];

console.log(chalk.bgMagenta.italic("BATALLA DE CHISMES"))
chismosas.forEach((chismosa, i) => {

    console.log(chalk.magenta.italic(`Chismosa ${i + 1}: ${chismosa.nombre}`));

    for (let ronda = 1; ronda <= 2; ronda++) {
        console.log(chalk.yellow(`\nRonda ${ronda}:`));
        chismosa.recolectarInfo();
        chismosa.contarChisme();
    }

    if (chismosa.nivelChisme > 8) {
        console.log(chalk.bold.magenta("chisme viral: "));
    }
    if (chismosa.reputacion > 8) {
        console.log(chalk.hex("#FFA500")("Reputación alta: "));
    }
    if (chismosa.reputacion < 3) {
        console.log(chalk.black("Reputación baja: "));
    }

    console.log(chalk.cyan(`${chismosa.nombre}  Reputación: ${chismosa.reputacion}, Nivel de chisme: ${chismosa.nivelChisme}`));

});

let maxchisme = 0;
let ganadora = null;
chismosas.forEach((chismosa) => {
    if (chismosa.nivelChisme > maxchisme) {
        maxchisme = chismosa.nivelChisme;
        ganadora = chismosa
    }

});
console.log(chalk.magenta.bold(`La chismosa ganadora es: ${ganadora.nombre} con el puntaje: ${ganadora.nivelChisme}`))

