import { AuthState } from '../../auth/store/authInterfaces'
import { FeedState } from '../modules/feed/store/feedReducer'

export interface AppState {
  auth: AuthState,
  feed: FeedState
}
