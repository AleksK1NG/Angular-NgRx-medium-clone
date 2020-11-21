import { CurrentUserInterface } from '../../shared/types/interfaces'

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
  currentUser: CurrentUserInterface
  validationErrors: Record<string, any> | null
  isLoggedIn: boolean
}
