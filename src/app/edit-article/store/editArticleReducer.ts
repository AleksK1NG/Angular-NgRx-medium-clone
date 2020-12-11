import { Article, BackendErrors } from '../../shared/types/interfaces'
import { Action, createReducer, on } from '@ngrx/store'
import {
  editArticleRequestAction,
  editArticleSuccessAction,
  getArticleErrorAction,
  getArticleRequestAction,
  getArticleSuccessAction,
} from './editArticleActions'

export interface EditArticleState {
  isLoading: boolean,
  article: Article | null
  isSubmitting: boolean
  errors: BackendErrors | null
}

const initialState: EditArticleState = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  errors: null,
}

const editArticleReducer = createReducer(
  initialState,
  on(editArticleRequestAction, (state, action) => ({
    ...state,
    isSubmitting: true,
  })),
  on(editArticleSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: null,
  })),
  on(editArticleSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: null,
  })),
  on(getArticleRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    errors: null,
    article: action.article,
  })),
  on(getArticleErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
  }))
)

export function reducers(state: EditArticleState, action: Action) {
  return editArticleReducer(state, action)
}
