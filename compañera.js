import { Chismosa } from './Chismosa.js'; 

export class CompaneraCuriosa extends Chismosa {
  constructor(nombre, reputacion, nivelChisme) {
    super(nombre, reputacion, nivelChisme);
  }

  recolectarInfo() {
    console.log(
      `${this.nombre}: Hace preguntas aparentemente profesionales a los compañeros de trabajo.`
    );
    this.#reputacion += Math.random() * 0.8;
  }

  contarChisme() {
    console.log(
      `${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo.`
    );
    this.#nivelChisme += Math.random() * 1.5;
  }
}
