import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetFeedResponse } from '../types/feed-interfaces'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private httpClient: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponse> {
    const fullUrl = environment.apiUrl + url
    return this.httpClient.get<GetFeedResponse>(fullUrl)
  }
}
