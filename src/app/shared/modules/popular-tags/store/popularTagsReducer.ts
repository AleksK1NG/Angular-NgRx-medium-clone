import { Action, createReducer, on } from '@ngrx/store'
import { getPopularTagsErrorAction, getPopularTagsRequestAction, getPopularTagsSuccessAction } from './popularTagsActions'

export interface PopularTagsState {
  data: string[] | null
  error: string | null
  isLoading: boolean
}

const initialState: PopularTagsState = {
  data: null,
  error: null,
  isLoading: false,
}

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsRequestAction, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    data: action.popularTags,
  })),
  on(getPopularTagsErrorAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: null,
  }))
)

export function reducers(state: PopularTagsState, action: Action) {
  return popularTagsReducer(state, action)
}
