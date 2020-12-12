import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { CurrentUser } from '../../../../types/interfaces'
import { isAnonymousSelector, isLoggedInSelector, userSelector } from '../../../../../auth/store/auth.selectors'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUser | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(userSelector))
  }
}
