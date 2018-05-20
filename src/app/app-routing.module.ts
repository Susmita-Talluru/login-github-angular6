import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/pages/login/login.component';
import {ListRepoComponent} from './components/pages/list-repo/list-repo.component';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [

  {
    'path': '',
    component: LoginComponent
  },
  {
    'path': 'callback',
    component: LoginComponent
  },
  {
    'path': 'listagem',
    component: ListRepoComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
