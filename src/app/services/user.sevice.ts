import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Personal } from './models/personal.model';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'http://tu-api.com/auth';

  constructor(private router: Router) { }

  getPersonal() {
    const url = new URL(`http://127.0.0.1:5100/api/Personal/Get`);
    return this.http.get<Personal[]>(url.toString());
  }

  postPersonal(data:Personal) {
    const url = new URL(`http://127.0.0.1:5100/api/Personal/Post`);
    return this.http.post<Personal[]>(url.toString(), data);
  }

  DeletePersonal(id:number) {
    const url = new URL(`http://127.0.0.1:5100/api/Personal/Delete/${id}`);
    return this.http.delete<Personal[]>(url.toString());
  }

  UpdatePersonal(id:number,data:Personal) {
    const url = new URL(`http://127.0.0.1:5100/api/Personal/Update/${id}`);
    return this.http.put<Personal[]>(url.toString(), data);
  }

  getOne(id: number) {
    return this.http.get<Personal>(`http://127.0.0.1:5100/api/Personal/GetById/${id}`);
  }
}
