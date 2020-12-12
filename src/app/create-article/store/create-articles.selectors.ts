import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../../shared/types/appState'
import { CreateArticleState } from './create-article.reducer'

export const createArticleFeatureSelector = createFeatureSelector<AppState, CreateArticleState>('createArticle')

export const isSubmittingSelector = createSelector(createArticleFeatureSelector, (createArticle) => createArticle.isSubmitting)

export const errorsSelector = createSelector(createArticleFeatureSelector, (createArticle) => createArticle.errors)
