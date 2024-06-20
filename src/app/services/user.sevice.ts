import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './models/user.model';
import { environment } from '../../../environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  post(data:User) {
    data.role = "Paciente";
    const url = new URL(`${environment.apiUrl}/User/Register`);
    return this.http.post<User>(url.toString(), data);
  }

}
