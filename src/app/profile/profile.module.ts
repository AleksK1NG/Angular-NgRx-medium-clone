import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './components/profile/profile.component'
import { ProfileService } from './services/profile.service'
import { EffectsModule } from '@ngrx/effects'
import { ProfileEffects } from './store/profile.effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/profile.reducer'
import { RouterModule, Routes } from '@angular/router'
import { FeedModule } from '../shared/modules/feed/feed.module'

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: ProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: ProfileComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature('profile', reducers),
    RouterModule,
    FeedModule,
  ],
  declarations: [ProfileComponent],
  providers: [ProfileService],
})
export class ProfileModule {}
