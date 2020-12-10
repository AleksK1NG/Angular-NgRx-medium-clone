import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourFeedComponent } from './components/your-feed/your-feed.component'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [CommonModule, BannerModule, FeedTogglerModule, FeedModule, PopularTagsModule, RouterModule.forChild(routes)],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
