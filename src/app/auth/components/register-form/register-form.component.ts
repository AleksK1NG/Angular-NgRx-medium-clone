import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerRequestAction } from '../../store/auth.actions'
import { authErrorsSelector, isSubmittingSelector } from '../../store/auth.selectors'
import { Observable } from 'rxjs'
import { RegisterRequest } from '../../store/auth.interfaces'
import { BackendErrors } from '../../../shared/types/interfaces'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrors> | null

  constructor(private fb: FormBuilder, private store: Store) {}

  form: FormGroup

  initializeForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(authErrorsSelector))
  }

  onSubmit(e: Event) {
    e.preventDefault()
    const request: RegisterRequest = { user: this.form.value }
    this.store.dispatch(registerRequestAction({ request }))
  }

  ngOnInit(): void {
    this.initializeForm()
  }
}
