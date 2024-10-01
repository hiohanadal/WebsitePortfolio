import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItems(): Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: 'Home',
        url: '#banner'
      },
      {
        name: 'About me',
        url: '#about'
      },
      {
        name: 'Skills',
        url: '#skills'
      },
      {
        name: 'Projects',
        url: '#projects'
      },
      {
        name: 'Contact',
        url: '#contact'
      }
    ];

    return menu;

  }
}
