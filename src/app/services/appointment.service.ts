import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';
import { Appointment } from './models/appointment.model';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private http = inject(HttpClient);

  Get() {
    const url = new URL(`${environment.apiUrl}/Appointment/Get`);
    return this.http.get<Appointment[]>(url.toString());
  }

  Post(payload:Appointment) {
    payload.doctorId = 3;
    payload.patientId = 3;
    payload.typeAppointmentId = 3;
    const url = new URL(`${environment.apiUrl}/Appointment/Post`);
    return this.http.post<Appointment>(url.toString(), payload);
  }

  Delete(id:number) {
    const url = new URL(`${environment.apiUrl}/Appointment/Delete/${id}`);
    return this.http.delete(url.toString());
  }


}
