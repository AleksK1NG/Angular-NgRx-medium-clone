import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../../../types/appState'
import { PopularTagsState } from './popular-tags.reducer'

export const popularTagsFeatureSelector = createFeatureSelector<AppState, PopularTagsState>('popularTags')

export const isLoadingSelector = createSelector(popularTagsFeatureSelector, (popularTagsState) => popularTagsState.isLoading)

export const errorSelector = createSelector(popularTagsFeatureSelector, (popularTagsState) => popularTagsState.error)

export const popularTagsSelector = createSelector(popularTagsFeatureSelector, (popularTagsState) => popularTagsState.data)
