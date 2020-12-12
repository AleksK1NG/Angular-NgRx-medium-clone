import { createAction, props } from '@ngrx/store'
import { ArticleActionTypes } from './article.action-types'
import { Article } from '../../shared/types/interfaces'

export const getArticleRequestAction = createAction(ArticleActionTypes.GET_ARTICLE_REQUEST, props<{ slug: string }>())
export const getArticleSuccessAction = createAction(ArticleActionTypes.GET_ARTICLE_SUCCESS, props<{ article: Article }>())
export const getArticleErrorAction = createAction(ArticleActionTypes.GET_ARTICLE_ERROR)

export const deleteArticleRequestAction = createAction(ArticleActionTypes.DELETE_ARTICLE_REQUEST, props<{ slug: string }>())
export const deleteArticleSuccessAction = createAction(ArticleActionTypes.DELETE_ARTICLE_SUCCESS)
export const deleteArticleErrorAction = createAction(ArticleActionTypes.DELETE_ARTICLE_ERROR)
