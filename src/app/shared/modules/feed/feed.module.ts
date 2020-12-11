import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { FeedEffects } from './store/feedEffects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/feedReducer'
import { FeedService } from './services/feed.service'
import { RouterModule } from '@angular/router'
import { BackendErrorMessagesModule } from '../backend-error-messages/backend-error-messages.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination.module'
import { TagListModule } from '../tag-list/tag-list.module'
import { LikesModule } from '../likes/likes.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeedEffects]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    BackendErrorMessagesModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    LikesModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
