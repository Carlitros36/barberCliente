export interface ITipoUsuario{
    id:number;
    nombre:string;
    usuarios:number;
}

export class Tipousuario implements ITipoUsuario {
    id: number;
    nombre: string;
    usuarios:number;
    constructor(id: number) {
        this.id = id;
    }
}