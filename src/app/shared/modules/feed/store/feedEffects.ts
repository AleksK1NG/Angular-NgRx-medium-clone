import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { FeedService } from '../services/feed.service'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { getFeedErrorAction, getFeedRequestAction, getFeedSuccessAction } from './feedActions'

@Injectable()
export class FeedEffects {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedRequestAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((response) => {
            return getFeedSuccessAction({ feed: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(getFeedErrorAction())
          })
        )
      })
    )
  )
}
