import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';
import { RouterModule }        from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroesComponent }     from './components/heroes/heroes.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './components/dashboard/dashboard.component';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
