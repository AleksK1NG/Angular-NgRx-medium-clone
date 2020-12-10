import { AuthState } from '../../auth/store/authInterfaces'
import { FeedState } from '../modules/feed/store/feedReducer'
import { PopularTagsState } from '../modules/popular-tags/store/popularTagsReducer'

export interface AppState {
  auth: AuthState
  feed: FeedState
  popularTags: PopularTagsState
}
