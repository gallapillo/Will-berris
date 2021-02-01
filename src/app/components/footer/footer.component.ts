import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  goods1Url = './assets/img/icons/Bitcoin.svg';
  goods2Url = './assets/img/icons/Facebook.svg';
  goods3Url = './assets/img/icons/Instagram.svg';
  goods4Url = './assets/img/icons/Mastercared.svg';
  goods5Url = './assets/img/icons/PayPal.svg';
  goods6Url = './assets/img/icons/Twitter.svg';
  goods7Url = './assets/img/icons/Visa.svg';
  goods8Url = './assets/img/Round%20with%20small%20icon.png';
  ngOnInit(): void {
  }

}
