import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { BackendErrors } from '../../../shared/types/interfaces'
import { authErrorsSelector, isSubmittingSelector } from '../../store/authSelectors'
import { LoginRequest } from '../../store/authInterfaces'
import { loginRequestAction } from '../../store/authActions'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrors> | null

  initializeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(authErrorsSelector))
  }

  onSubmit(e: Event) {
    e.preventDefault()
    const request: LoginRequest = { user: this.form.value }
    this.store.dispatch(loginRequestAction({ request }))
  }

  ngOnInit(): void {
    this.initializeForm()
  }
}
