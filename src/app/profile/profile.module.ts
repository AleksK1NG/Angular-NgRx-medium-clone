import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './components/profile/profile.component'
import { ProfileService } from './services/profile.service'
import { EffectsModule } from '@ngrx/effects'
import { ProfileEffects } from './store/profileEffects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/profileReducer'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([ProfileEffects]), StoreModule.forFeature('profile', reducers)],
  declarations: [ProfileComponent],
  providers: [ProfileService],
})
export class ProfileModule {}
