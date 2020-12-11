import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ArticleService as SharedArticleService } from '../../shared/services/article.service'
import { catchError, map, switchMap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { of } from 'rxjs'
import { getArticleErrorAction, getArticleRequestAction, getArticleSuccessAction } from './articleActions'

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private sharedArticleService: SharedArticleService) {}

  getArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleRequestAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.gerArticle(slug).pipe(
          map((response) => {
            return getArticleSuccessAction({ article: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(getArticleErrorAction())
          })
        )
      })
    )
  )
}
