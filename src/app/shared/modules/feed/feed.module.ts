import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { FeedEffects } from './store/feedEffects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/feedReducer'
import { FeedService } from './services/feed.service'
import { RouterModule } from '@angular/router'
import { ErrorMessagesModule } from '../backend-error-messages/error-messages.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeedEffects]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessagesModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
