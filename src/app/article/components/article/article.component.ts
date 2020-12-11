import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getArticleRequestAction } from '../../store/articleActions'
import { ActivatedRoute } from '@angular/router'
import { Article } from '../../../shared/types/interfaces'
import { combineLatest, Observable, Subscription } from 'rxjs'
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/articleSelectors'
import { userSelector } from '../../../auth/store/authSelectors'
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
    console.log(11111)
    this.isAuthor$ = combineLatest(this.store.pipe(select(articleSelector)), this.store.pipe(select(userSelector))).pipe(
      map((value) => {
        const [article, currentUser] = value
        console.log('[article, currentUser] ', article?.author?.username === currentUser?.username)
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
}
