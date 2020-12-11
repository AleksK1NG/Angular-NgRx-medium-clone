import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { ArticleForm, BackendErrors } from '../../../../types/interfaces'
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
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    })
  }

  onSubmit() {
    this.articleSubmitEvent.emit(this.form.value)
  }
}
