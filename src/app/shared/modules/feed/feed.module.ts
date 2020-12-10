import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { FeedEffects } from './store/feedEffects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/feedReducer'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([FeedEffects]), StoreModule.forFeature('feed', reducers)],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
