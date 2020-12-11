import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../../shared/types/appState'
import { ArticleState } from './articleReducer'

export const articleFeatureSelector = createFeatureSelector<AppState, ArticleState>('article')

export const isLoadingSelector = createSelector(articleFeatureSelector, (articleState) => articleState.isLoading)

export const errorSelector = createSelector(articleFeatureSelector, (articleState) => articleState.error)

export const articleSelector = createSelector(articleFeatureSelector, (articleState) => articleState.data)
