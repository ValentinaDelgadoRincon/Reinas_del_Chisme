class Chismosa{
    #reputacion
    #nivelChisme
    constructor(nombre,reputacion,nivelChisme){
        if(this.constructor === Chismosa){
            throw new Error("No se puede instanciar la clase Chismosa");
        }
        this.nombre=nombre;
        this.#reputacion=reputacion;
        this.#nivelChisme=nivelChisme;
    }

    get reputacion(){
        return this.#reputacion;
    }

    get nivelChisme(){
        return this.#nivelChisme;
    }

    recolectarInfo(){
        throw new Error("El método debe implementarse en las clases hijas")
    }

    contarChisme(){
        throw new Error("El método debe implementarse en las clases hijas")
    }
}