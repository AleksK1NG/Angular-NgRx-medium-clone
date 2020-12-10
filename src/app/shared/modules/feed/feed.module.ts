import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { FeedEffects } from './store/feedEffects'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([FeedEffects])],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
