import { Injectable } from '@angular/core'
import { AuthResponseInterface, RegisterRequest } from '../store/authInterfaces'
import { Observable } from 'rxjs'
import { CurrentUserInterface } from '../../shared/types/interfaces'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  registerUser(data: RegisterRequest): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser))
  }

  loginUser(data: any): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }

  updateCurrentUser(data: any): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.put(url, data).pipe(map(this.getUser))
  }
}
