export interface Appointment {
    id:number;
    fechaHora: string;
    comment: string;
    patientId: number;
    doctor: string;
    typeAppointment:string;
}

export interface AppointmentResponse {
    currentPage:number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    data: Appointment[];
}

export interface AppointmentRequest {
    id:number;
    fechaHora: string;
    comment: string;
    patientId: number;
    doctorId: string;
    typeAppointmentId:string;
}