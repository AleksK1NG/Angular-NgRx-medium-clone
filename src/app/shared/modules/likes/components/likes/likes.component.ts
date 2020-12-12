import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesRequestAction } from '../../store/likes.actions'

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {
  @Input() isFavoriteProps: boolean
  @Input() favoritesCountProps: number
  @Input() articleSlug: string

  favoritesCount: number
  isFavorite: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorite = this.isFavoriteProps
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesRequestAction({
        isFavorite: this.isFavorite,
        slug: this.articleSlug,
      })
    )
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }

    this.isFavorite = !this.isFavorite
  }
}
