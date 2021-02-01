import { Component, OnInit } from '@angular/core';
import {Swiper} from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  prevArrowUrl = './assets/img/Arrow-prev.svg';
  nextArrowUrl = './assets/img/Arrow-next.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
