import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  constructor() { }

  goods1Url = './assets/img/goods/image-119.png';
  goods2Url = './assets/img/goods/image-120.png';
  goods3Url = './assets/img/goods/image-121.png';
  goods4Url = './assets/img/goods/image-122.png';

  ngOnInit(): void {
  }

}
