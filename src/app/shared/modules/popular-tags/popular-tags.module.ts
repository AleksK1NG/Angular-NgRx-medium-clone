import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component'
import { PopularTagsService } from './services/popular-tags.service'
import { EffectsModule } from '@ngrx/effects'
import { PopularTagsEffects } from './store/popular-tags.effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/popular-tags.reducer'
import { LoadingModule } from '../loading/loading.module'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([PopularTagsEffects]),
    StoreModule.forFeature('popularTags', reducers),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
