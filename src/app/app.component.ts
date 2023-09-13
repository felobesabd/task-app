import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-app';
  lang: any;
  rtl:boolean = false;

  constructor(private translate: TranslateService) {
    if ('language' in localStorage) {
      this.lang = localStorage.getItem('language')

      if (this.lang == 'ar'){
        this.rtl = true;
      }

      translate.use(this.lang);
    } else {
      translate.use(this.translate.defaultLang);
    }
  }
}
