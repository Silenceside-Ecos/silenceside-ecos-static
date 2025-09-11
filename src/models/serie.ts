import { Objetivo } from "./objetivo";
import { Taller } from "./taller";

export class Serie {
    id: number;
    nombre: string;
    descripcion: string;
    objetivos: Objetivo[];
    talleres: Taller[];

    constructor(id: number, nombre: string, descripcion: string, objetivos: Objetivo[], talleres: Taller[]) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.objetivos = objetivos;
        this.talleres = talleres;
    }
}   