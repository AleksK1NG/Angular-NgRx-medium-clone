import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../../../types/appState'
import { FeedState } from './feed.reducer'

export const feedFeatureSelector = createFeatureSelector<AppState, FeedState>('feed')

export const isLoadingSelector = createSelector(feedFeatureSelector, (feedState) => feedState.isLoading)

export const feedSelector = createSelector(feedFeatureSelector, (feedState) => feedState.data)

export const errorSelector = createSelector(feedFeatureSelector, (feedState) => feedState.error)
