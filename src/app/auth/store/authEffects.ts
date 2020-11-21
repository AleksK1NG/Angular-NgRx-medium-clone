import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { registerErrorAction, registerRequestAction, registerSuccessAction } from './authActions'
import { catchError, map, switchMap } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  registerUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerRequestAction),
      switchMap(({ request }) => {
        return this.authService.registerUser(request).pipe(
          map((response) => {
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
