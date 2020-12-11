import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { CreateArticleService } from '../services/create-article.service'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { of } from 'rxjs'
import { createArticleErrorAction, createArticleRequestAction, createArticleSuccessAction } from './createArticleActions'
import { Router } from '@angular/router'

@Injectable()
export class CreateArticleEffects {
  constructor(private actions$: Actions, private createArticleService: CreateArticleService, private router: Router) {}

  createArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleRequestAction),
      switchMap(({ article }) => {
        return this.createArticleService.createArticle(article).pipe(
          map((response) => {
            return createArticleSuccessAction({ article: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(createArticleErrorAction({ errors: err.error.errors }))
          })
        )
      })
    )
  )

  redirectAfterCreateUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap((res) => {
          this.router.navigate(['/articles', res.article.slug])
        })
      ),
    { dispatch: false }
  )
}
