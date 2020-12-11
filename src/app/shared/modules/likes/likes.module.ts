import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LikesComponent } from './components/likes/likes.component'
import { LikesService } from './services/likes.service'

@NgModule({
  declarations: [LikesComponent],
  imports: [CommonModule],
  exports: [LikesComponent],
  providers: [LikesService],
})
export class LikesModule {}
