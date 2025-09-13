const Chismosa= require ('./chismosa');

class EstudianteEspia extends Chismosa {
  constructor(nombre, reputacion, nivelChisme) {
    super(nombre, reputacion, nivelChisme);
  }

  recolectarInfo() {
    console.log(
      `${this.nombre}: Lee chats ajenos desde el último puesto del salón.`
    );
    this.valorReputacion (-( Math.random() * 4));
  }

  contarChisme() {
    console.log(`${this.nombre}: Filtra el chisme por estados en WhatsApp.`);
    this.valorChisme(Math.random() * 7);
    if (this.reputacion>4) {
      this.valorReputacion(-(Math.random() * 2));
    }
  }
}
 module.exports=EstudianteEspia;