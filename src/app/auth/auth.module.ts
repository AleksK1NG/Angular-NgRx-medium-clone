import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterFormComponent } from './components/register_form/register-form/register-form.component'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/authEffects'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent,
  },
]

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, EffectsModule.forFeature([AuthEffects])],
  exports: [RegisterFormComponent],
  providers: [AuthService],
})
export class AuthModule {}
