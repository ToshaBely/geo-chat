import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GeoComponent } from './components/geo/geo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
