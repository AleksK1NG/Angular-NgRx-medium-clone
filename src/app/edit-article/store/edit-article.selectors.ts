import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../../shared/types/appState'
import { EditArticleState } from './edit-article.reducer'

export const editArticleFeatureSelector = createFeatureSelector<AppState, EditArticleState>('editArticle')

export const isSubmittingSelector = createSelector(editArticleFeatureSelector, (createArticle) => createArticle.isSubmitting)

export const isLoadingSelector = createSelector(editArticleFeatureSelector, (createArticle) => createArticle.isLoading)

export const errorsSelector = createSelector(editArticleFeatureSelector, (createArticle) => createArticle.errors)

export const articleSelector = createSelector(editArticleFeatureSelector, (createArticle) => createArticle.article)
