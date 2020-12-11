import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl: string
  tagName: string
  routeParams: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe((params) => {
      this.tagName = params.slug
      this.apiUrl = `/articles?tag=${params.slug}`
    })
  }

  ngOnDestroy(): void {
    this.routeParams.unsubscribe()
  }
}
