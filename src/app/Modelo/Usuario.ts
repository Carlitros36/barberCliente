import { ITipoUsuario } from './TipoUsuario';

export interface IUsuario{
    id:number;
    nombre:string;
    apellido1:string;
    apellido2:string;
    login:string;
    password:string;
    email:string;
    tipousuario_id:ITipoUsuario;
    citas:number;
}

export class Usuario implements IUsuario {
    id: number;
    dni: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    login: string;
    password:string;
    email: string;
    tipousuario_id: ITipoUsuario;
    citas:number;
}