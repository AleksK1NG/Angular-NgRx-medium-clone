import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedRequestAction } from '../../store/feedActions'
import { Observable, Subscription } from 'rxjs'
import { GetFeedResponse } from '../../types/feed-interfaces'
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/feedSelectors'
import { environment } from '../../../../../../environments/environment'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}
  @Input() apiUrl: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponse | null>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  ngOnInit(): void {
    this.initializeValues()
    this.store.dispatch(getFeedRequestAction({ url: this.apiUrl }))
    this.initializeListeners()
    console.log('base url', this.router.url)
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      console.log('params ', params)
      this.currentPage = Number(params.page || '1')
    })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
}
