import { Eco } from "./eco";

export class Espacio {
    id: number;
    nombre: string;
    descripcion: string;
    ecos: Eco[];

    constructor(id: number, nombre: string, descripcion: string, ecos: Eco[]) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ecos = ecos;
    }
}