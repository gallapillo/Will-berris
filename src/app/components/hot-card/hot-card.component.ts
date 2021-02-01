import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-card',
  templateUrl: './hot-card.component.html',
  styleUrls: ['./hot-card.component.scss']
})
export class HotCardComponent implements OnInit {

  constructor() { }

  imgUrl1 = `./src/assets/card-image1.jpg`;
  imgUrl2 = `./src/assets/cart-image2.jpg`;
  imgUrl3 = `./src/assets/cart-image3.jpg`;
  imgUrl4 = `./src/assets/card-image4.jpg`;
  ArrowUrl = './assets/img/Arrow.svg';
  goods1Url = './assets/img/goods/image-119.png';
  goods2Url = './assets/img/goods/image-120.png';
  goods3Url = './assets/img/goods/image-121.png';
  goods4Url = './assets/img/goods/image-122.png';
  ngOnInit(): void {
  }

}
