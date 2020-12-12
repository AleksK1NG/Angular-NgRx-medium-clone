import { Component, OnInit } from '@angular/core'
import { ArticleForm, BackendErrors } from '../../../shared/types/interfaces'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { errorsSelector, isSubmittingSelector } from '../../store/createArticlesSelectors'
import { createArticleRequestAction } from '../../store/createArticleActions'

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
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrors | null>

  constructor(private store: Store) {}

  onSubmit(value: ArticleForm) {
    this.store.dispatch(createArticleRequestAction({ article: value }))
  }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }
}
