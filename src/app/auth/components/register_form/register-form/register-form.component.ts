import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup

  initializeForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(e: Event) {
    e.preventDefault()
    console.log(this.form.value)
  }

  ngOnInit(): void {
    this.initializeForm()
  }
}
