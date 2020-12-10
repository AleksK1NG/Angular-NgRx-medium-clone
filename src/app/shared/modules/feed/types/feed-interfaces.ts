import { ArticleInterface } from '../../../types/interfaces'

export interface GetFeedResponse {
  articles: ArticleInterface[]
  articlesCount: number
}
