import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { getCurrentUserRequestAction } from './auth/store/authActions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  title = 'medium-clone'

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserRequestAction())
  }
}
