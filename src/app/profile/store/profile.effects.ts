import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ProfileService } from '../services/profile.service'
import { getProfileErrorAction, getProfileRequestAction, getProfileSuccessAction } from './profile.actions'
import { Injectable } from '@angular/core'
import { UserProfile } from '../../shared/types/interfaces'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private profileService: ProfileService) {}

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfileRequestAction),
      switchMap(({ slug }) => {
        return this.profileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfile) => {
            return getProfileSuccessAction({ userProfile })
          }),
          catchError(() => {
            return of(getProfileErrorAction())
          })
        )
      })
    )
  )
}
