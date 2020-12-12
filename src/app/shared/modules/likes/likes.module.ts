import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LikesComponent } from './components/likes/likes.component'
import { LikesService } from './services/likes.service'
import { EffectsModule } from '@ngrx/effects'
import { LikesEffects } from './store/likes.effects'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([LikesEffects])],
  declarations: [LikesComponent],
  exports: [LikesComponent],
  providers: [LikesService],
})
export class LikesModule {}
