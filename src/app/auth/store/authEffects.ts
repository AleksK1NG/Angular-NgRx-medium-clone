import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  getCurrentUserErrorAction,
  getCurrentUserRequestAction,
  getCurrentUserSuccessAction,
  loginErrorAction,
  loginRequestAction,
  loginSuccessAction,
  registerErrorAction,
  registerRequestAction,
  registerSuccessAction,
} from './authActions'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../../shared/services/persistence.service'
import { Router } from '@angular/router'

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistenceService,
    private router: Router
  ) {}

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

  loginUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequestAction),
      switchMap(({ request }) => {
        return this.authService.loginUser(request).pipe(
          map((response) => {
            this.persistanceService.set('access-token', response.token)
            return loginSuccessAction({ currentUser: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(loginErrorAction({ errors: err.error.errors }))
          })
        )
      })
    )
  )

  getCurrentUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserRequestAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((response) => {
            console.log('getCurrentUserEffect$ ', response)
            return getCurrentUserSuccessAction({ currentUser: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(getCurrentUserErrorAction())
          })
        )
      })
    )
  )

  redirectRegisterUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap((res) => {
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  )

  redirectLoginUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap((res) => {
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  )
}
