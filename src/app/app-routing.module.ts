import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { SearchComponent } from './shared/components/search/search.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'searchMovie', component : SearchComponent},
  {path : 'moviedetails/:id', component : MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
