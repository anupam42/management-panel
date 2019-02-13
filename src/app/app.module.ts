import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MaterialModule } from './shared/modules/material.module';
import { LoginModule } from './pages/login/login.module';
import { NavTopModule } from './layouts/nav-top-menu/nav-top-menu.module';
import { NavLeftModule } from './layouts/nav-left-menu/nav-left-menu.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    LoginModule,
    NavTopModule,
    NavLeftModule,
    NotFoundModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
