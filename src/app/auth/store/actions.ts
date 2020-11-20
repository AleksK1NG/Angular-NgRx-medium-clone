import { createAction, props } from '@ngrx/store'
import { AuthActionTypes } from './actionTypes'
import { RegisterRequest } from './interfaces'

// export const registerRequestAction = createAction(AuthActionTypes.REGISTER_REQUEST, props<RegisterRequest>())
export const registerRequestAction = createAction(AuthActionTypes.REGISTER_REQUEST, (payload: RegisterRequest) => {
  return payload
})
