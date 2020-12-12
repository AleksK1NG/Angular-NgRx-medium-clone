import { AuthState } from '../../auth/store/auth.interfaces'
import { FeedState } from '../modules/feed/store/feed.reducer'
import { PopularTagsState } from '../modules/popular-tags/store/popular-tags.reducer'
import { ArticleState } from '../../article/store/article.reducer'
import { CreateArticleState } from '../../create-article/store/create-article.reducer'
import { EditArticleState } from '../../edit-article/store/edit-article.reducer'
import { ProfileState } from '../../profile/store/profile.reducer'

export interface AppState {
  auth: AuthState
  feed: FeedState
  popularTags: PopularTagsState
  article: ArticleState
  createArticle: CreateArticleState
  editArticle: EditArticleState
  profile: ProfileState
}
