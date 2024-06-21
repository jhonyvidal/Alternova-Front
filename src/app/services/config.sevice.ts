import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';
import { Doctor, Type } from './models/config.model';


@Injectable({
  providedIn: 'root'
})
export class ConfigApiService {

  private http = inject(HttpClient);

  GetDoctor() {
    const url = new URL(`${environment.apiUrl}/Config/GetDoctor`);
    return this.http.get<Doctor[]>(url.toString());
  }

  Gettype() {
    const url = new URL(`${environment.apiUrl}/Config/GetType`);
    return this.http.get<Type[]>(url.toString());
  }

}
