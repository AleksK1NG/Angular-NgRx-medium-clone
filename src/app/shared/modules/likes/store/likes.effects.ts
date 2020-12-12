import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { of } from 'rxjs'
import { addToFavoritesErrorAction, addToFavoritesRequestAction, addToFavoritesSuccessAction } from './likes.actions'
import { LikesService } from '../services/likes.service'

@Injectable()
export class LikesEffects {
  constructor(private actions$: Actions, private likesService: LikesService) {}

  addToFavoritesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesRequestAction),
      switchMap(({ slug, isFavorite }) => {
        const article$ = isFavorite ? this.likesService.removeFromFavorites(slug) : this.likesService.addToFavorites(slug)

        return article$.pipe(
          map((response) => {
            return addToFavoritesSuccessAction({ article: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(addToFavoritesErrorAction())
          })
        )
      })
    )
  )
}
