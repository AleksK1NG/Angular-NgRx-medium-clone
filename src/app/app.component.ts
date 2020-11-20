import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'medium-clone'

  handleClick(e: Event) {
    console.log('click ', e.target)
    this.title = ' Cool =D'
  }
}
