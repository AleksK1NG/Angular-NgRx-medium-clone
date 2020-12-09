import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterFormComponent } from './components/register-form/register-form.component'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/authEffects'
import { ErrorMessagesModule } from '../shared/modules/error-messages/error-messages.module';
import { LoginFormComponent } from './components/login-form/login-form.component'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
]

@NgModule({
  declarations: [RegisterFormComponent, LoginFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, EffectsModule.forFeature([AuthEffects]), ErrorMessagesModule],
  exports: [RegisterFormComponent],
  providers: [AuthService],
})
export class AuthModule {}
