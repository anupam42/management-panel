import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [ AuthGuard ] },
  {
    path: 'home/management-panel',
    loadChildren: './pages/management-panel/management-panel.module#ManagementPanelModule',
    data: { breadcrumb: 'Painel de Gestão'},
    canActivate: [ AuthGuard ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home', canActivate: [ AuthGuard ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
