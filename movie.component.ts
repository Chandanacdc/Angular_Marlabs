import { Component } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
//  styleUrls
})

export class MovieComponent
{
    title:string = 'Avengers';
  imgWidth:number = 580;
  imgHeight:number = 580;
  showMovie1:string='';

  movie_title:string = 'KGF';
  width:number = 600;
  height:number = 600;
  
  showMovie():void
  {
    this.showMovie1='Joaquin Phonenix';
  }
}
