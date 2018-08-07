import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GeoComponent } from './components/geo/geo.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageService } from './services/message.service';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    MainComponent,
    GeoComponent,
    MessageListComponent,
    ChatPageComponent,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
