import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthStateInterface } from './authInterfaces'
import { AppStateInterface } from '../../shared/types/appState.interface'

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState) => authState.isLoading)

export const authErrorsSelector = createSelector(authFeatureSelector, (authState) => authState.validationErrors)
