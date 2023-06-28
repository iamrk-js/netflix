import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SearchComponent } from './shared/components/search/search.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';
import { EmbedvideoComponent } from './shared/components/embedvideo/embedvideo.component';
import { OverviewComponent } from './shared/components/overview/overview.component';
import { MoviePhotosComponent } from './shared/components/movie-photos/movie-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    NavbarComponent,
    MainSliderComponent,
    EmbedvideoComponent,
    OverviewComponent,
    MoviePhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
