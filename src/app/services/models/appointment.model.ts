export interface Appointment {
    id:number;
    fechaHora: string;
    comment: string;
    patientId: number;
    doctor: string;
    typeAppointment:string;
}

export interface AppointmentRequest {
    id:number;
    fechaHora: string;
    comment: string;
    patientId: number;
    doctorId: string;
    typeAppointmentId:string;
}