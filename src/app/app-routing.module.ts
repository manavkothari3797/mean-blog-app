import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './views/content/content.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ArticleDetailsComponent } from './views/article-details/article-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '',
    component: ContainerComponent,
    children: [{
      path: 'home',
      component: ContentComponent
    }, {
      path: 'details/:id',
      component: ArticleDetailsComponent
    }, {
      path: 'admin',
      loadChildren: 'src/app/views/admin/admin.module#AdminModule'
    }]
  }, {
    path: 'manav-kothari/portfolio',
    component: PortfolioComponent
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
