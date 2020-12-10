import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetFeedResponse } from '../types/feed-interfaces'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private httpClient: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponse> {
    return this.httpClient.get<GetFeedResponse>('').pipe(tap((data) => console.log('res ', data)))
  }
}
