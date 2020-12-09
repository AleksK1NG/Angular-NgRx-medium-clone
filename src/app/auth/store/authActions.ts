import { createAction, props } from '@ngrx/store'
import { AuthActionTypes } from './authActionTypes'
import { LoginRequest, RegisterRequest } from './authInterfaces'
import { BackendErrorsInterface, CurrentUserInterface } from '../../shared/types/interfaces'

export const registerRequestAction = createAction(AuthActionTypes.REGISTER_REQUEST, props<{ request: RegisterRequest }>())
export const registerSuccessAction = createAction(AuthActionTypes.REGISTER_SUCCESS, props<{ currentUser: CurrentUserInterface }>())
export const registerErrorAction = createAction(AuthActionTypes.REGISTER_ERROR, props<{ errors: BackendErrorsInterface }>())

export const loginRequestAction = createAction(AuthActionTypes.LOGIN_REQUEST, props<{ request: LoginRequest }>())
export const loginSuccessAction = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ currentUser: CurrentUserInterface }>())
export const loginErrorAction = createAction(AuthActionTypes.LOGIN_ERROR, props<{ errors: BackendErrorsInterface }>())


