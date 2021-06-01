import { Usuario } from './Usuario';
export interface ICita{
    id:number;
    fecha:Date;
    hora:any;
    usuario:Usuario;
}
export class Cita implements ICita{
    id:number;
    fecha:Date;
    hora:any;
    usuario:Usuario;
}