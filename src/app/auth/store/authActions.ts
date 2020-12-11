import { createAction, props } from '@ngrx/store'
import { AuthActionTypes } from './authActionTypes'
import { LoginRequest, RegisterRequest } from './authInterfaces'
import { BackendErrors, CurrentUser } from '../../shared/types/interfaces'

export const registerRequestAction = createAction(AuthActionTypes.REGISTER_REQUEST, props<{ request: RegisterRequest }>())
export const registerSuccessAction = createAction(AuthActionTypes.REGISTER_SUCCESS, props<{ currentUser: CurrentUser }>())
export const registerErrorAction = createAction(AuthActionTypes.REGISTER_ERROR, props<{ errors: BackendErrors }>())

export const loginRequestAction = createAction(AuthActionTypes.LOGIN_REQUEST, props<{ request: LoginRequest }>())
export const loginSuccessAction = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ currentUser: CurrentUser }>())
export const loginErrorAction = createAction(AuthActionTypes.LOGIN_ERROR, props<{ errors: BackendErrors }>())

export const getCurrentUserRequestAction = createAction(AuthActionTypes.GET_CURRENT_USER_REQUEST)
export const getCurrentUserSuccessAction = createAction(AuthActionTypes.GET_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUser }>())
export const getCurrentUserErrorAction = createAction(AuthActionTypes.GET_CURRENT_USER_ERROR)

export const updateUserRequestAction = createAction(AuthActionTypes.UPDATE_USER_REQUEST, props<{ currentUser: CurrentUser }>())
export const updateUserSuccessAction = createAction(AuthActionTypes.UPDATE_USER_SUCCESS, props<{ currentUser: CurrentUser }>())
export const updateUserErrorAction = createAction(AuthActionTypes.UPDATE_USER_ERROR, props<{ errors: BackendErrors }>())
