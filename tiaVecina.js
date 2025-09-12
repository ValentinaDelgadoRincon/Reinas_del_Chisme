const Chismosa= require ('./chismosa')

class TiaVecina extends Chismosa{
    constructor(nombre, reputacion,nivelChisme){
        super(reputacion,nivelChisme);
        this.nombre=nombre;
    }

    recoletarInfo(){
        console.log(`${this.nombre } :Apreovecha la reunión del barrio para escuchar discretamente`);
        this.getnivelChisme()+=Math.random()*3;
    }

    contarchisme(){
        console.log(`${this.nombre} : Filtra el chisme por estados en WhatsApp`);
        this.getnivelChisme()+=Math.random()*6;
        this.getreputacion()-=Math.random()*4
    }
}

module.exports=TiaVecina;