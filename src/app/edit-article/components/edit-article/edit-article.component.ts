import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Article, ArticleForm, BackendErrors } from '../../../shared/types/interfaces'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { editArticleRequestAction, getArticleRequestAction } from '../../store/edit-article.actions'
import { articleSelector, errorsSelector, isLoadingSelector, isSubmittingSelector } from '../../store/edit-article.selectors'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleForm>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  backendErrors$: Observable<BackendErrors | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(errorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: Article) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleRequestAction({ slug: this.slug }))
  }

  onSubmit(article: ArticleForm): void {
    this.store.dispatch(editArticleRequestAction({ slug: this.slug, article }))
  }

  ngOnInit(): void {
    this.initialValues()
    this.fetchData()
  }
}
