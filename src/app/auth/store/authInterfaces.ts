import { CurrentUserInterface } from '../../shared/types/interfaces'

export interface RegisterRequest {
  username: string
  email: string
  password: string
}

export interface AuthStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  currentUser: CurrentUserInterface
  validationErrors: any
  isLoggedIn: boolean
}
