import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ArticleService as SharedArticleService } from '../../shared/services/article.service'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { of } from 'rxjs'
import {
  deleteArticleErrorAction,
  deleteArticleRequestAction,
  deleteArticleSuccessAction,
  getArticleErrorAction,
  getArticleRequestAction,
  getArticleSuccessAction,
} from './article.actions'
import { ArticleService } from '../services/article.service'
import { Router } from '@angular/router'

@Injectable()
export class ArticleEffects {
  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private articleService: ArticleService,
    private router: Router
  ) {}

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

  deleteArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleRequestAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map((response) => {
            return deleteArticleSuccessAction()
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(deleteArticleErrorAction())
          })
        )
      })
    )
  )

  redirectAfterDeleteUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap((res) => {
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  )
}
