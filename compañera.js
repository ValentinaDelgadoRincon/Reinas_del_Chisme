const Chismosa = require('./chismosa');

class CompaneraCuriosa extends Chismosa {
  constructor(nombre, reputacion, nivelChisme) {
    super(nombre, reputacion, nivelChisme);
  }

  recolectarInfo() {
    console.log(
      `${this.nombre}: Hace preguntas aparentemente profesionales a los compañeros de trabajo.`
    );
    this.valorReputacion( Math.random() * 7);
  }

  contarChisme() {
    console.log(
      `${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo.`
    );
    this.valorChisme(Math.random() * 1.5);
  }
}

module.exports=CompaneraCuriosa;