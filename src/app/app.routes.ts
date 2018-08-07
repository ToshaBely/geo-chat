import { Routes } from '@angular/router';

import { GeoComponent } from './components/geo/geo.component';
import { MainComponent } from './components/main/main.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatPageComponent },
  { path: 'app', component: GeoComponent },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: ''},
];
