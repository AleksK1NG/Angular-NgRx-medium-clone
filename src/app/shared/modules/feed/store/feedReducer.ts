import { GetFeedResponse } from '../types/feed-interfaces'
import { Action, createReducer, on } from '@ngrx/store'
import { getFeedErrorAction, getFeedRequestAction, getFeedSuccessAction } from './feedActions'
import { routerNavigationAction } from '@ngrx/router-store'

export interface FeedState {
  isLoading: boolean
  error: string | null
  data: GetFeedResponse | null
}

const initialState: FeedState = {
  isLoading: false,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initialState,
  on(getFeedRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    data: action.feed,
  })),
  on(getFeedErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: null,
  })),
  on(routerNavigationAction, (state, action) => initialState)
)

export function reducers(state: FeedState, action: Action) {
  return feedReducer(state, action)
}
