import { Serie } from "./serie";

export class Nivel {
    id: number;
    nombre: string;
    descripcion: string;
    series: Serie[];

    constructor(id: number, nombre: string, descripcion: string, series: Serie[]) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.series = series;
    }
}
