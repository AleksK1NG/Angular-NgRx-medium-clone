import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { Article, CreateArticleResponse } from '../../shared/types/interfaces'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private httpClient: HttpClient) {}

  updateArticle(slug: string, article: any): Observable<Article> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.httpClient.put<CreateArticleResponse>(fullUrl, article).pipe(map((res) => res.article))
  }
}
