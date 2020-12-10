import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedRequestAction } from '../../store/feedActions'
import { Observable } from 'rxjs'
import { GetFeedResponse } from '../../types/feed-interfaces'
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/feedSelectors'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(private store: Store) {}
  @Input() apiUrl: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponse | null>

  ngOnInit(): void {
    this.initializeValues()
    this.store.dispatch(getFeedRequestAction({ url: this.apiUrl }))
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }
}
