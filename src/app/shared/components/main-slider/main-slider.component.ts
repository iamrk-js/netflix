import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../modals/movies';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    autoplay : true,
    animateIn : "faseIn",
    animateOut : "fadeOut",
    autoplayTimeout:3000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1,
        dots:true
      }
    },
    nav: true
  }
 @Input() moviesArray!: Array<Imovie> 
  constructor() { }

  ngOnInit(): void {
    
  }

 

}
