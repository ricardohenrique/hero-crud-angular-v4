import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';
import { RouterModule }            from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule }          from '@angular/material';
import { CommonModule } 					 from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';
import { InMemoryDataService }     from './in-memory-data.service';

// import { SidenavModule }        	 from './modules/sidenav/sidenav.module';

import { AppComponent }            from './app.component';
import { HeroesComponent }         from './components/heroes/heroes.component';
import { HeroSearchComponent }     from './components/hero-search/hero-search.component';
import { HeroDetailComponent }     from './components/hero-detail/hero-detail.component';
import { HeroService }             from './hero.service';
import { DashboardComponent }      from './components/dashboard/dashboard.component';
import { SidenavComponent }      	 from './modules/sidenav/sidenav.component';

import { AppRoutingModule }        from './app-routing.module';

import 'hammerjs';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroSearchComponent,
		SidenavComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		// SidenavModule
	],
	providers: [HeroService],
	bootstrap: [AppComponent]
})
export class AppModule { }
