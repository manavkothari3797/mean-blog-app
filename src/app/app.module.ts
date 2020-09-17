import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ContentComponent } from './views/content/content.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ArticleDetailsComponent } from './views/article-details/article-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PortfolioComponent,
    NotFoundComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
