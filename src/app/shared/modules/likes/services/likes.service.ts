import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Article, GetArticleResponse } from '../../../types/interfaces'
import { map } from 'rxjs/operators'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug)
    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug)
    return this.http.delete(url).pipe(map(this.getArticle))
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: GetArticleResponse): Article {
    return response.article
  }
}
