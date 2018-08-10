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
import { AuthService } from './services/auth.service';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { HeaderComponent } from './components/header/header.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

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
    MessageItemComponent,
    HeaderComponent,
    UserPanelComponent,
  ],
  providers: [
    MessageService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
