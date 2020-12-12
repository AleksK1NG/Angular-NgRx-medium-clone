import { Article } from '../../../types/interfaces'

export interface GetFeedResponse {
  articles: Article[]
  articlesCount: number
}
