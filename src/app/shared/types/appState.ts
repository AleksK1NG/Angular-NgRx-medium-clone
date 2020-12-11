import { AuthState } from '../../auth/store/authInterfaces'
import { FeedState } from '../modules/feed/store/feedReducer'
import { PopularTagsState } from '../modules/popular-tags/store/popularTagsReducer'
import { ArticleState } from '../../article/store/articleReducer'

export interface AppState {
  auth: AuthState
  feed: FeedState
  popularTags: PopularTagsState
  article: ArticleState
}
