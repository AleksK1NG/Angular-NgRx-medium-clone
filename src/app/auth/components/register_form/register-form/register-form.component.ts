import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { registerRequestAction } from '../../../store/actions'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}
  form: FormGroup

  initializeForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(e: Event) {
    e.preventDefault()
    console.log(this.form.value)
    this.store.dispatch(registerRequestAction(this.form.value))
  }

  ngOnInit(): void {
    this.initializeForm()
  }
}
