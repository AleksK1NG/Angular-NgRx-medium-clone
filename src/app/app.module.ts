import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import * as auth from './auth/store/authReducer'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from './shared/modules/top-bar/top-bar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({ auth: auth.reducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    TopBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
