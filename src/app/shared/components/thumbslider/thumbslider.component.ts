import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../modals/movies';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-thumbslider',
  templateUrl: './thumbslider.component.html',
  styleUrls: ['./thumbslider.component.scss']
})
export class ThumbsliderComponent implements OnInit {
  @Input() moviesArray!: Array<Imovie> ;
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
    margin:10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 4,
        dots:true
      },
      1200:{
        items: 5
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }



}
