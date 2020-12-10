import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GetPopularTagsResponse } from '../popular-tags.interfaces'
import { environment } from '../../../../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private httpClient: HttpClient) {}

  getPopularTags(): Observable<string[]> {
    const apiUrl = environment.apiUrl + '/tags'
    return this.httpClient.get<GetPopularTagsResponse>(apiUrl).pipe(map((res) => res.tags))
  }
}
