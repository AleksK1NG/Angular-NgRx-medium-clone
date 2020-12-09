import { AuthStateInterface } from './authInterfaces'
import { Action, createReducer, on } from '@ngrx/store'
import {
  loginErrorAction,
  loginRequestAction,
  loginSuccessAction,
  registerErrorAction,
  registerRequestAction,
  registerSuccessAction,
} from './authActions'

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
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
    isLoading: false,
    validationErrors: null,
    isSubmitting: false,
    isLoggedIn: true,
  })),
  on(registerErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(loginRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(loginSuccessAction, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
    isLoading: false,
    validationErrors: null,
    isSubmitting: false,
    isLoggedIn: true,
  })),
  on(loginErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
