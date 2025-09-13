const Chismosa= require ('./chismosa');

class TiaVecina extends Chismosa{
    constructor(nombre, reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme);
        this.nombre=nombre;
    }

    recolectarInfo(){
        console.log(`${this.nombre } :Apreovecha la reunión del barrio para escuchar discretamente`);
        this.valorReputacion(-(Math.random()*4));
    }

    contarChisme(){
        console.log(`${this.nombre} : Filtra el chisme por estados en WhatsApp`);
        this.valorChisme(Math.random()*8);

        if(this.reputacion<4){
            this.valorChisme(-(Math.random()*3));
            console.log("Exageró con el chisme,su reputación bajó")
        }
    }
}

module.exports=TiaVecina;