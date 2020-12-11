import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.httpClient.delete<{}>(fullUrl)
  }
}
