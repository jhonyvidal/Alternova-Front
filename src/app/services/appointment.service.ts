import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';
import { Appointment, AppointmentRequest, AppointmentResponse } from './models/appointment.model';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private http = inject(HttpClient);

  Get(pageNumber?:number, pageSize?:number) {
    const pagination = pageNumber ? `?pageNumber=${pageNumber}&pageSize=${pageSize}` : "";
    const url = new URL(`${environment.apiUrl}/Appointment/Get${pagination}`);
    return this.http.get<AppointmentResponse>(url.toString());
  }

  Post(payload:AppointmentRequest) {
    const url = new URL(`${environment.apiUrl}/Appointment/Post`);
    return this.http.post<AppointmentRequest>(url.toString(), payload);
  }

  Delete(id:number) {
    const url = new URL(`${environment.apiUrl}/Appointment/Delete/${id}`);
    return this.http.delete(url.toString());
  }


}
