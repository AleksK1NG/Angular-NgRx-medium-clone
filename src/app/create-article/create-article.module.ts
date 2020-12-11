import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateArticleComponent } from './components/create-article/create-article.component'
import { RouterModule, Routes } from '@angular/router'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { CreateArticleService } from './services/create-article.service'

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
