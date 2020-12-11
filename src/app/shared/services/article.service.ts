import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { Article, GetArticleResponse } from '../types/interfaces'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  gerArticle(slug: string): Observable<Article> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.httpClient.get<GetArticleResponse>(fullUrl).pipe(map((res) => res.article))
  }
}
