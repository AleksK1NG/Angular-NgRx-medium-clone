import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import * as auth from './auth/store/authReducer'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from './shared/modules/top-bar/top-bar.module'
import { PersistenceService } from './shared/services/persistence.service'
import { AuthInterceptorService } from './shared/services/auth-interceptor.service'
import { GlobalFeedModule } from './global-feed/global-feed.module'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { YourFeedModule } from './your-feed/your-feed.module'
import { TagFeedModule } from './tag-feed/tag-feed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({ auth: auth.reducer, router: routerReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    StoreRouterConnectingModule.forRoot(),
    YourFeedModule,
    TagFeedModule,
  ],
  providers: [PersistenceService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
