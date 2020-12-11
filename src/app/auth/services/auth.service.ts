import { Injectable } from '@angular/core'
import { AuthResponse, LoginRequest, RegisterRequest } from '../store/authInterfaces'
import { Observable } from 'rxjs'
import { CurrentUser } from '../../shared/types/interfaces'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser(response: AuthResponse): CurrentUser {
    return response.user
  }

  registerUser(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser))
  }

  loginUser(data: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }

  updateCurrentUser(data: CurrentUser): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user'
    return this.http.put(url, data).pipe(map(this.getUser))
  }
}
