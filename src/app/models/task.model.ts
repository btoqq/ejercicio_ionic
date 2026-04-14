export type TaskStatus = 'pendiente' | 'en progreso' | 'listo';
export type TaskPriority = 'baja' | 'media' | 'alta' | 'urgente';

export interface Task {
    id: string;
    titulos: string;
    descripcion: string;
    fechaCreacion: string;
    fechaLimite: string;
    estado: TaskStatus;
    prioridad: TaskPriority;
    categoría: string;
    completada: boolean;
}
