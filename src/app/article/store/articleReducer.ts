import { Article } from '../../shared/types/interfaces'
import { Action, createReducer, on } from '@ngrx/store'
import { getArticleErrorAction, getArticleRequestAction, getArticleSuccessAction } from './articleActions'
import { routerNavigationAction } from '@ngrx/router-store'

export interface ArticleState {
  isLoading: boolean
  error: string | null
  data: Article | null
}

const initialState: ArticleState = {
  isLoading: false,
  error: null,
  data: null,
}

const articleReducer = createReducer(
  initialState,
  on(getArticleRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    data: action.article,
  })),
  on(getArticleErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: null,
  })),
  on(routerNavigationAction, (state, action) => initialState)
)

export function reducers(state: ArticleState, action: Action) {
  return articleReducer(state, action)
}
