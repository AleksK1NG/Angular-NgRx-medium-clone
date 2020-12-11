import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { isLoggedInSelector } from '../../../../../auth/store/authSelectors'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit, OnChanges {
  constructor(private store: Store) {}
  @Input() tagName: string | null

  isLoggedIn: Observable<boolean>

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    this.isLoggedIn = this.store.pipe(select(isLoggedInSelector))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ', changes)
  }
}
