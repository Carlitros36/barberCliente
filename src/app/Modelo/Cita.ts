import { Usuario } from './Usuario';
export interface ICita{
    id:number;
    fecha:Date;
    usuario_id:Usuario;
}

export class Cita implements ICita{
    id:number;
    fecha:Date;
    usuario_id:Usuario;
}