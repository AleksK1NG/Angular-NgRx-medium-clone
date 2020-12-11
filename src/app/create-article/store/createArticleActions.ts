import { createAction, props } from '@ngrx/store'
import { CreateArticleActionTypes } from './createArticleActionTypes'
import { Article, ArticleForm, BackendErrors } from '../../shared/types/interfaces'

export const createArticleRequestAction = createAction(CreateArticleActionTypes.CREATE_ARTICLE_REQUEST, props<{ article: ArticleForm }>())
export const createArticleSuccessAction = createAction(CreateArticleActionTypes.CREATE_ARTICLE_SUCCESS, props<{ article: Article }>())
export const createArticleErrorAction = createAction(CreateArticleActionTypes.CREATE_ARTICLE_ERROR, props<{ errors: BackendErrors }>())
