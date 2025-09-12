class EstudianteEspia extends Chismosa {
  constructor(nombre, reputacion, nivelChisme) {
    super(nombre, reputacion, nivelChisme);
  }

  recolectarInfo() {
    console.log(
      `${this.nombre}: Lee chats ajenos desde el último puesto del salón.`
    );
    this.#nivelChisme += Math.random() * 4;
  }

  contarChisme() {
    console.log(`${this.nombre}: Filtra el chisme por estados en WhatsApp.`);
    this.#nivelChisme += Math.random() * 2.5;
    if (Math.random() > 0.5) {
      this.#reputacion -= Math.random() * 2;
    }
  }
}
