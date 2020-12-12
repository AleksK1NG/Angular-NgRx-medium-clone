import { createAction, props } from '@ngrx/store'
import { ProfileActionTypes } from './profile.action-types'
import { UserProfile } from '../../shared/types/interfaces'

export const getProfileRequestAction = createAction(ProfileActionTypes.GET__PROFILE_REQUEST, props<{ slug: string }>())

export const getProfileSuccessAction = createAction(ProfileActionTypes.GET__PROFILE_SUCCESS, props<{ userProfile: UserProfile }>())

export const getProfileErrorAction = createAction(ProfileActionTypes.GET__PROFILE_ERROR)
