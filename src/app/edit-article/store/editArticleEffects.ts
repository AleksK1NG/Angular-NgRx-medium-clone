import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { EditArticleService } from '../services/edit-article.service'
import {
  editArticleErrorAction,
  editArticleRequestAction,
  editArticleSuccessAction,
  getArticleErrorAction,
  getArticleRequestAction,
  getArticleSuccessAction,
} from './editArticleActions'
import { createArticleSuccessAction } from '../../create-article/store/createArticleActions'
import { ArticleService } from '../../shared/services/article.service'

@Injectable()
export class EditArticleEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private editArticleService: EditArticleService,
    private sharedArticleService: ArticleService
  ) {}

  editArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleRequestAction),
      switchMap(({ slug, article }) => {
        return this.editArticleService.updateArticle(slug, article).pipe(
          map((response) => {
            return editArticleSuccessAction({ article: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(editArticleErrorAction({ errors: err.error.errors }))
          })
        )
      })
    )
  )

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

  redirectAfterEditArticle$ = createEffect(
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
