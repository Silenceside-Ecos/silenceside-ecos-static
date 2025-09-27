import { Nivel } from "./nivel";

export class Eco {
    id: number; 
    nombre: string; 
    descripcion: string;
    niveles?: Nivel[];

    constructor(id: number, nombre: string, descripcion: string, niveles: Nivel[]) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.niveles = niveles;
    }
}