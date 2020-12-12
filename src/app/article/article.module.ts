import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleComponent } from './components/article/article.component'
import { EffectsModule } from '@ngrx/effects'
import { ArticleEffects } from './store/article.effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/article.reducer'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { RouterModule, Routes } from '@angular/router'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'
import { ArticleService } from './services/article.service'

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticleEffects]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
