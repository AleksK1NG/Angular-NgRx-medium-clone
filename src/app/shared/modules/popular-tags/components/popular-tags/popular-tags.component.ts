import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getPopularTagsRequestAction } from '../../store/popular-tags.actions'
import { Observable } from 'rxjs'
import { errorSelector, isLoadingSelector, popularTagsSelector } from '../../store/popular-tags.selectors'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<string[]>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

  fetchData() {
    this.store.dispatch(getPopularTagsRequestAction())
  }

  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }
}
