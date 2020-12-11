import { createAction, props } from '@ngrx/store'
import { LikesActionTypes } from './likesActionTypes'
import { Article } from '../../../types/interfaces'

export const addToFavoritesRequestAction = createAction(
  LikesActionTypes.ADD_TO_FAVORITES_REQUEST,
  props<{ isFavorite: boolean; slug: string }>()
)
export const addToFavoritesSuccessAction = createAction(LikesActionTypes.ADD_TO_FAVORITES_SUCCESS, props<{ article: Article }>())
export const addToFavoritesErrorAction = createAction(LikesActionTypes.ADD_TO_FAVORITES_ERROR)
