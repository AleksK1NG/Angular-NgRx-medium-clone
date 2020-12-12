import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './components/profile/profile.component'
import { ProfileService } from './services/profile.service'

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileComponent],
  providers: [ProfileService],
})
export class ProfileModule {}
