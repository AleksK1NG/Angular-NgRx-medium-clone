import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../../shared/types/appState'
import { ProfileState } from './profile.reducer'

export const profileFeatureSelector = createFeatureSelector<AppState, ProfileState>('profile')

export const isLoadingSelector = createSelector(profileFeatureSelector, (profileState) => profileState.isLoading)

export const errorSelector = createSelector(profileFeatureSelector, (profileState) => profileState.error)

export const profileSelector = createSelector(profileFeatureSelector, (profileState) => profileState.data)
