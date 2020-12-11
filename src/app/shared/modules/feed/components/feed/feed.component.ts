import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedRequestAction } from '../../store/feedActions'
import { Observable, Subscription } from 'rxjs'
import { GetFeedResponse } from '../../types/feed-interfaces'
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/feedSelectors'
import { environment } from '../../../../../../environments/environment'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { parseUrl, stringify } from 'query-string'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}
  @Input() apiUrl: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponse | null>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  fetchData() {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrl)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithQueryParams = `${parsedUrl.url}?${stringifiedParams}`

    this.store.dispatch(getFeedRequestAction({ url: apiUrlWithQueryParams }))
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1')
      this.fetchData()
    })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes.apiUrl.firstChange && changes.apiUrl.currentValue !== changes.apiUrl.previousValue
    if (isApiUrlChanged) {
      this.fetchData()
    }
  }
}
