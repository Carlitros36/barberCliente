import { Cita } from './Cita';
import { Servicios } from './Servicios';

export class ServiciosRealizados{
    id:number;
    cantidad:number;
    cita_id:Cita;
    servicios_id:Servicios;
}