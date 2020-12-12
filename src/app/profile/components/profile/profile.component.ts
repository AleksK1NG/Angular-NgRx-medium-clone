import { Component, OnInit } from '@angular/core'
import { CurrentUser, UserProfile } from '../../../shared/types/interfaces'
import { combineLatest, Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { getProfileRequestAction } from '../../store/profileActions'
import { errorSelector, isLoadingSelector, profileSelector } from '../../store/profileSelectors'
import { userSelector } from '../../../auth/store/authSelectors'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(userSelector), filter(Boolean)),
      this.store.pipe(select(profileSelector), filter(Boolean))
    ).pipe(
      map(([currentUser, userProfile]: [CurrentUser, UserProfile]) => {
        return currentUser.username === userProfile.username
      })
    )
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store.pipe(select(profileSelector)).subscribe((userProfile) => {
      this.userProfile = userProfile
    })

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug
      this.fetchUserProfile()
    })
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`
  }

  fetchUserProfile(): void {
    this.store.dispatch(getProfileRequestAction({ slug: this.slug }))
  }
}
