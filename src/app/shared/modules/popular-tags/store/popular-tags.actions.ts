import { createAction, props } from '@ngrx/store'
import { PopularTagsActionTypes } from './popular-tags.action-types'

export const getPopularTagsRequestAction = createAction(PopularTagsActionTypes.GET_POPULAR_TAGS_REQUEST)
export const getPopularTagsSuccessAction = createAction(PopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS, props<{ popularTags: string[] }>())
export const getPopularTagsErrorAction = createAction(PopularTagsActionTypes.GET_POPULAR_TAGS_ERROR)
