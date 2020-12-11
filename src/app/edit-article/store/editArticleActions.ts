import { createAction, props } from '@ngrx/store'
import { Article, ArticleForm, BackendErrors } from '../../shared/types/interfaces'
import { EditArticleActionTypes } from './editArticleActionTypes'

export const editArticleRequestAction = createAction(
  EditArticleActionTypes.EDIT_ARTICLE_REQUEST,
  props<{ slug: string; article: ArticleForm }>()
)
export const editArticleSuccessAction = createAction(EditArticleActionTypes.EDIT_ARTICLE_SUCCESS, props<{ article: Article }>())
export const editArticleErrorAction = createAction(EditArticleActionTypes.EDIT_ARTICLE_ERROR, props<{ errors: BackendErrors }>())

export const getArticleRequestAction = createAction(EditArticleActionTypes.GET_ARTICLE_REQUEST, props<{ slug: string }>())
export const getArticleSuccessAction = createAction(EditArticleActionTypes.GET_ARTICLE_SUCCESS, props<{ article: Article }>())
export const getArticleErrorAction = createAction(EditArticleActionTypes.GET_ARTICLE_ERROR)
