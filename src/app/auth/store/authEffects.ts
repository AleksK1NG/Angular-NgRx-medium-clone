import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { registerErrorAction, registerRequestAction, registerSuccessAction } from './authActions'
import { catchError, map, switchMap } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../../shared/services/persistence.service'

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private persistanceService: PersistenceService) {}

  registerUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerRequestAction),
      switchMap(({ request }) => {
        return this.authService.registerUser(request).pipe(
          map((response) => {
            this.persistanceService.set('access-token', response.token)
            return registerSuccessAction({ currentUser: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(registerErrorAction({ errors: err.error.errors }))
          })
        )
      })
    )
  )
}
