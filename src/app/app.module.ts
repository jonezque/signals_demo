import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { OnPushRxjsComponent } from './on-push-rxjs/on-push-rxjs.component';
import { OnPushSignalComponent } from './on-push-signal/on-push-signal.component';
import { AdditionalComponent } from './additional/additional.component';

const routes: Route[] = [ {
  path: '', component: OnPushRxjsComponent
},{
  path: 'pushsignal', component: OnPushSignalComponent
},
  { path: 'additional', component: AdditionalComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    OnPushRxjsComponent,
    OnPushSignalComponent,
    AdditionalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
