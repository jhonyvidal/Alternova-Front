export interface Appointment {
    id:number;
    fechaHora: string;
    comment: string;
    patientId: number;
    doctorId: number;
    typeAppointmentId:number;
}