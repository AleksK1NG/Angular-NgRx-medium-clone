import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from './components/settings/settings.component'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module'

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
