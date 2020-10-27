import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main/main.component'

const routes: Routes = [
  {
  path: 'main',
  loadChildren: () => import('./main/main.module')
  .then(m => m.MainModule)
},
{ path: '', redirectTo: 'main', pathMatch: 'full' },
{ path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
