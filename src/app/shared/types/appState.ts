import { AuthState } from '../../auth/store/authInterfaces'
import { FeedState } from '../modules/feed/store/feedReducer'
import { PopularTagsState } from '../modules/popular-tags/store/popularTagsReducer'
import { ArticleState } from '../../article/store/articleReducer'
import { CreateArticleState } from '../../create-article/store/createArticleReducer'
import { EditArticleState } from '../../edit-article/store/editArticleReducer'

export interface AppState {
  auth: AuthState
  feed: FeedState
  popularTags: PopularTagsState
  article: ArticleState
  createArticle: CreateArticleState
  editArticle: EditArticleState
}
