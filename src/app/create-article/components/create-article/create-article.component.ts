import { Component, OnInit } from '@angular/core'
import { ArticleForm } from '../../../shared/types/interfaces'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleForm = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }
  constructor() {}

  onSubmit(value: any) {
    console.log('submit form ', value)
  }

  ngOnInit(): void {}
}
