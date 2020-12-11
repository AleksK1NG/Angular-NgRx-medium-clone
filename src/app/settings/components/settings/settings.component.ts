import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { BackendErrors, CurrentUser } from '../../../shared/types/interfaces'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { authErrorsSelector, isSubmittingSelector, userSelector } from '../../../auth/store/authSelectors'
import { filter } from 'rxjs/operators'
import { updateUserRequestAction } from '../../../auth/store/authActions'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup
  currentUser: CurrentUser
  currentUserSubscription: Subscription
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrors | null>
  constructor(private fb: FormBuilder, private store: Store) {}

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(authErrorsSelector))
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store.pipe(select(userSelector), filter(Boolean)).subscribe((currentUser: CurrentUser) => {
      this.currentUser = currentUser
      this.initializeForm()
    })
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    })
  }

  submit(): void {
    const currentUserInput: CurrentUser = {
      ...this.currentUser,
      ...this.form.value,
    }
    this.store.dispatch(updateUserRequestAction({ currentUser: currentUserInput }))
  }

  logout(): void {
    // this.store.dispatch(logoutAction())
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }
}
