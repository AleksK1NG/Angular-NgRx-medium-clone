import { Component, Input, OnInit, Output } from '@angular/core'
import { ArticleForm, BackendErrors } from '../../../../types/interfaces'
import { EventEmitter } from 'events'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleForm
  @Input() isSubmitting: boolean
  @Input() errors: BackendErrors | null

  @Output() articleSubmitEvent = new EventEmitter<ArticleForm>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.form = this.fb.group({
      title: '',
      description: '',
      body: '',
      tagList: '',
    })
  }

  onSubmit() {
    this.articleSubmitEvent.emit(this.form.value)
  }
}
