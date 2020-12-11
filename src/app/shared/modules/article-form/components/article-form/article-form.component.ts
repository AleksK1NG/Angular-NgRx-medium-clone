import { Component, Input, OnInit } from '@angular/core'
import { ArticleForm, BackendErrors } from '../../../../types/interfaces'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleForm
  @Input() isSubmitting: boolean
  @Input() errors: BackendErrors | null

  constructor() {}

  ngOnInit(): void {}
}
