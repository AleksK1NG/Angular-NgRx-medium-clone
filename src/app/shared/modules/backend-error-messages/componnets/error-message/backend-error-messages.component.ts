import { Component, Input, OnInit } from '@angular/core'
import { BackendErrors } from '../../../../types/interfaces'

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() errors: BackendErrors | null
  errorMessages: string[]

  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.errors).map((name, i) => {
      const messages = this.errors[name].join(', ')
      return `${name} ${messages}`
    })
  }
}
