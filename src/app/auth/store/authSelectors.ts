import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from './authInterfaces'
import { AppStateInterface } from '../../shared/types/appState.interface'

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthState>('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState) => authState.isLoading)

export const authErrorsSelector = createSelector(authFeatureSelector, (authState) => authState.validationErrors)

export const isLoggedInSelector = createSelector(authFeatureSelector, (authState) => authState.isLoggedIn)

export const userSelector = createSelector(authFeatureSelector, (authState) => authState.currentUser)

export const isAnonymousSelector = createSelector(authFeatureSelector, (authState) => authState.isLoggedIn === false)
