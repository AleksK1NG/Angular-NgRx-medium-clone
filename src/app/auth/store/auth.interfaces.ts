import { BackendErrors, CurrentUser } from '../../shared/types/interfaces'

export interface RegisterRequest {
  user: {
    username: string
    email: string
    password: string
  }
}

export interface AuthResponse {
  user: CurrentUser
}

export interface AuthState {
  isSubmitting: boolean
  isLoading: boolean
  currentUser: CurrentUser | null
  validationErrors: BackendErrors | null
  isLoggedIn: boolean
}

export interface LoginRequest {
  user: {
    email: string
    password: string
  }
}
