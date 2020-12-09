import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerRequestAction } from '../../store/authActions'
import { authErrorsSelector, isSubmittingSelector } from '../../store/authSelectors'
import { Observable } from 'rxjs'
import { RegisterRequest } from '../../store/authInterfaces'
import { BackendErrorsInterface } from '../../../shared/types/interfaces'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit, OnChanges {
  constructor(private fb: FormBuilder, private store: Store) {}
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface> | null

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change ', changes)
  }
}
