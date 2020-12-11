import { createAction, props } from '@ngrx/store'
import { ArticleActionTypes } from './articleActionTypes'
import { Article } from '../../shared/types/interfaces'

export const getArticleRequestAction = createAction(ArticleActionTypes.GET_ARTICLE_REQUEST, props<{ slug: string }>())
export const getArticleSuccessAction = createAction(ArticleActionTypes.GET_ARTICLE_SUCCESS, props<{ article: Article }>())
export const getArticleErrorAction = createAction(ArticleActionTypes.GET_ARTICLE_ERROR)
