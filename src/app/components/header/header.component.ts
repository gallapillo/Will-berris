import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  CartLogoUrl = './assets/img/cart.svg';
  LogoUrl = './assets/img/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
