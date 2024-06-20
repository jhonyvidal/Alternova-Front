import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  constructor(private router: Router) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/User/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      }),
      catchError(error => {
        console.error('Error en el login', error);
        return of(null);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
