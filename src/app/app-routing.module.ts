import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [{
  path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/main-page',
        pathMatch: 'full'
      },
      {
        path: 'main-page',
        loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
