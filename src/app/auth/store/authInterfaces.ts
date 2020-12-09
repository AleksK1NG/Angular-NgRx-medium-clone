import { BackendErrorsInterface, CurrentUserInterface } from '../../shared/types/interfaces'

export interface RegisterRequest {
  user: {
    username: string
    email: string
    password: string
  }
}

export interface AuthResponseInterface {
  user: CurrentUserInterface
}

export interface AuthStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  currentUser: CurrentUserInterface | null
  validationErrors: BackendErrorsInterface | null
  isLoggedIn: boolean
}

export interface LoginRequest {
  user: {
    email: string
    password: string
  }
}
