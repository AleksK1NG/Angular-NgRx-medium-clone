import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { deleteArticleRequestAction, getArticleRequestAction } from '../../store/article.actions'
import { ActivatedRoute } from '@angular/router'
import { Article } from '../../../shared/types/interfaces'
import { combineLatest, Observable, Subscription } from 'rxjs'
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/article.selectors'
import { userSelector } from '../../../auth/store/auth.selectors'
import { map } from 'rxjs/operators'

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
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
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
    this.isAuthor$ = combineLatest(this.store.pipe(select(articleSelector)), this.store.pipe(select(userSelector))).pipe(
      map((value) => {
        const [article, currentUser] = value
        return article?.author?.username === currentUser?.username
      })
    )
  }

  fetchData() {
    this.store.dispatch(getArticleRequestAction({ slug: this.slug }))
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  deleteArticle() {
    this.store.dispatch(deleteArticleRequestAction({ slug: this.slug }))
  }
}
