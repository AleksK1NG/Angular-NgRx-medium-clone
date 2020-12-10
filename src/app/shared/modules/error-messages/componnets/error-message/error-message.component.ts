import { Component, Input, OnInit } from '@angular/core'
import { BackendErrors } from '../../../../types/interfaces'

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  constructor() {}
  @Input() errors: BackendErrors | null
  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.errors).map((name, i) => {
      const messages = this.errors[name].join(', ')
      return `${name} ${messages}`
    })
  }
}
