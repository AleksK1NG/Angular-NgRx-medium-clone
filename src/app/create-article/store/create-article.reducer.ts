import { BackendErrors } from '../../shared/types/interfaces'
import { Action, createReducer, on } from '@ngrx/store'
import { createArticleErrorAction, createArticleRequestAction, createArticleSuccessAction } from './create-article.actions'

export interface CreateArticleState {
  isSubmitting: boolean
  errors: BackendErrors | null
}

const initialState: CreateArticleState = {
  isSubmitting: false,
  errors: null,
}

const createArticleReducer = createReducer(
  initialState,
  on(createArticleRequestAction, (state, action) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: null,
  })),
  on(createArticleErrorAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: action.errors,
  }))
)

export function reducers(state: CreateArticleState, action: Action) {
  return createArticleReducer(state, action)
}
