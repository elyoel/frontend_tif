export interface Participantes{
    id: number
    nombre : string;
    apellido : string;
    edad : number;
    id_eventos : number;
    id_pais : number;
    id_medallas : number;
    id_disciplinas : number;
};
export interface Pais{
    id : number;
    nombre_de_pais : string;
    region : string;
};
export interface Medallas{
    id : number;
    tipo_de_medalla : string;
    id_eventos: number;
};
export interface Eventos{
    id : number;
    nombre_evento: string;
    fecha_del_evento: string;
};
export interface Disciplinas{
    id : number;
    id_eventos : number;
    nombre_disciplinas : string;
    tipo_de_disciplinas : string;
};