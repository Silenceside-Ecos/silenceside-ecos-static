import { Objetivo } from "./objetivo";
import { Taller } from "./taller";

export class Serie {
    id: number;
    title: string;
    descripcion: string;
    objetivos: Objetivo[];
    talleres: Taller[];

    constructor(id: number, title: string, descripcion: string, objetivos: Objetivo[], talleres: Taller[]) {
        this.id = id;
        this.title = title;
        this.descripcion = descripcion;
        this.objetivos = objetivos;
        this.talleres = talleres;
    }
}   