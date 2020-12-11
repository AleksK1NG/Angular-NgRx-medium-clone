import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Article, ArticleForm, CreateArticleResponse } from '../../shared/types/interfaces'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private httpClient: HttpClient) {}

  createArticle(article: ArticleForm): Observable<Article> {
    const fullUrl = environment.apiUrl + '/articles'
    return this.httpClient.post<CreateArticleResponse>(fullUrl, article).pipe(map((res) => res.article))
  }
}
