import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleFormComponent } from './components/article-form/article-form.component'

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
