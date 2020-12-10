import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PopularTagsService } from '../services/popular-tags.service'
import { catchError, map, switchMap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { of } from 'rxjs'
import { getPopularTagsErrorAction, getPopularTagsRequestAction, getPopularTagsSuccessAction } from './popularTagsActions'

@Injectable()
export class PopularTagsEffects {
  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}

  getPopularTagsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsRequestAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((response) => {
            return getPopularTagsSuccessAction({ popularTags: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(getPopularTagsErrorAction())
          })
        )
      })
    )
  )
}
