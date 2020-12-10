import { createAction, props } from '@ngrx/store'
import { FeedActionTypes } from './feedActionTypes'
import { GetFeedResponse } from '../types/feed-interfaces'

export const getFeedRequestAction = createAction(FeedActionTypes.GET_FEED_REQUEST, props<{ url: string }>())
export const getFeedSuccessAction = createAction(FeedActionTypes.GET_FEED_SUCCESS, props<{ feed: GetFeedResponse }>())
export const getFeedErrorAction = createAction(FeedActionTypes.GET_FEED_ERROR)
