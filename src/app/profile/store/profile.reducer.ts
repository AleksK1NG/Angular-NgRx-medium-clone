import { UserProfile } from '../../shared/types/interfaces'
import { Action, createReducer, on } from '@ngrx/store'
import { getProfileErrorAction, getProfileRequestAction, getProfileSuccessAction } from './profile.actions'

export interface ProfileState {
  data: UserProfile | null
  isLoading: boolean
  error: string | null
}

const initialState: ProfileState = {
  data: null,
  isLoading: false,
  error: null,
}

const profileReducer = createReducer(
  initialState,
  on(getProfileRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(getProfileSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.userProfile,
    error: null,
  })),
  on(getProfileErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: null,
  }))
)

export function reducers(state: ProfileState, action: Action) {
  return profileReducer(state, action)
}
