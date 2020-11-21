import { AuthStateInterface } from './authInterfaces'
import { Action, createReducer, on } from '@ngrx/store'
import { registerRequestAction } from './authActions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const authReducer = createReducer(
  initialState,
  on(registerRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
  }))
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
