import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { isLoggedInSelector } from '../../../../../auth/store/authSelectors'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  constructor(private store: Store) {}
  @Input() tagName: string | null

  isLoggedIn: Observable<boolean>

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    this.isLoggedIn = this.store.pipe(select(isLoggedInSelector))
  }
}
