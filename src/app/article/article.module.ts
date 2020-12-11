import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleComponent } from './components/article/article.component'
import { EffectsModule } from '@ngrx/effects'
import { ArticleEffects } from './store/articleEffects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/articleReducer'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { RouterModule, Routes } from '@angular/router'

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
    StoreModule.forFeature('articles', reducers),
    RouterModule.forChild(routes),
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService],
})
export class ArticleModule {}
