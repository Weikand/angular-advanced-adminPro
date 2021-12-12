import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeElement = document.querySelector('#theme');

  constructor() { }

  setInitialTheme() {
    let themeUrl = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.themeElement?.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.themeElement?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach( element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.themeElement?.getAttribute('href');

      if (btnThemeUrl === currentTheme ) {
        element.classList.add('working');
      }

    })
  }

}
