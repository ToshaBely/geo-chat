import { Routes } from '@angular/router';

import { GeoComponent } from './components/geo/geo.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'app', component: GeoComponent },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: ''},
];