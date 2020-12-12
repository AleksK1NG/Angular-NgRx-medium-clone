import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { EditArticleService } from './services/edit-article.service'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/edit-article.reducer'
import { ArticleModule } from '../article/article.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { EditArticleEffects } from './store/edit-article.effects'

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([EditArticleEffects]),
    ArticleModule,
    LoadingModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
