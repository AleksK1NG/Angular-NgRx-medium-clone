import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  getCurrentUserErrorAction,
  getCurrentUserRequestAction,
  getCurrentUserSuccessAction,
  loginErrorAction,
  loginRequestAction,
  loginSuccessAction,
  logoutUserAction,
  registerErrorAction,
  registerRequestAction,
  registerSuccessAction,
  updateUserErrorAction,
  updateUserRequestAction,
  updateUserSuccessAction,
} from './auth.actions'
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
        const token = this.persistanceService.get('access-token')
        if (!token) {
          return of(getCurrentUserErrorAction())
        }

        return this.authService.getCurrentUser().pipe(
          map((response) => {
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

  updateUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserRequestAction),
      switchMap(({ currentUser }) => {
        return this.authService.updateCurrentUser(currentUser).pipe(
          map((response) => {
            return updateUserSuccessAction({ currentUser: response })
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(err)
            return of(updateUserErrorAction({ errors: err.error.errors }))
          })
        )
      })
    )
  )

  logoutUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutUserAction),
        tap((res) => {
          this.persistanceService.delete('access-token')
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
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

  redirectUpdateUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateUserSuccessAction),
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
