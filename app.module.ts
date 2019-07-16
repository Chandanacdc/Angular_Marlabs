import { BrowserModule } from '@angular/platform-browser'; // improve the browser rendering capability we sue browser module. 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from '../movie/movie.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
  AppComponent, MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
