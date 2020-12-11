import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleFormComponent } from './components/article-form/article-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BackendErrorMessagesModule } from '../backend-error-messages/backend-error-messages.module'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
