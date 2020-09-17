import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ArticleManagementComponent } from './article-management/article-management.component';

@NgModule({
  declarations: [AdminComponent, LoginComponent, HomeComponent, ClientManagementComponent, ArticleManagementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
