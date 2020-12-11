import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { EditArticleService } from './services/edit-article.service'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/editArticleReducer'
import { ArticleModule } from '../article/article.module'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('editArticle', reducers), ArticleModule, ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
