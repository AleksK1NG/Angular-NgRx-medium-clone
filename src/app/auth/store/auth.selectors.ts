import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from './auth.interfaces'
import { AppState } from '../../shared/types/appState'

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState) => authState.isLoading)

export const authErrorsSelector = createSelector(authFeatureSelector, (authState) => authState.validationErrors)

export const isLoggedInSelector = createSelector(authFeatureSelector, (authState) => authState.isLoggedIn)

export const userSelector = createSelector(authFeatureSelector, (authState) => authState.currentUser)

export const isAnonymousSelector = createSelector(authFeatureSelector, (authState) => authState.isLoggedIn === false)
