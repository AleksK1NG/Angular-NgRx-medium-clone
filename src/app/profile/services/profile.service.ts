import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { GetUserProfileResponse, UserProfile } from '../../shared/types/interfaces'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfile> {
    const url = `${environment.apiUrl}/profiles/${slug}`
    return this.httpClient.get(url).pipe(map((response: GetUserProfileResponse) => response.profile))
  }
}
