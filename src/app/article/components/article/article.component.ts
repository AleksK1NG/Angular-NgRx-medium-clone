import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getArticleRequestAction } from '../../store/articleActions'
import { ActivatedRoute } from '@angular/router'
import { Article } from '../../../shared/types/interfaces'
import { Observable, Subscription } from 'rxjs'
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/articleSelectors'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: Article | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeListeners() {
    this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((article) => {
      this.article = article
    })
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData() {
    this.store.dispatch(getArticleRequestAction({ slug: this.slug }))
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }
}
