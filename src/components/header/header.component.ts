import {Component, OnInit} from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lang: any = 'en';

  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang
  }

  ngOnInit(): void {
  }

  toggleCon() {
    if (this.lang === 'en') {
      localStorage.setItem('language', 'ar')
    } else {
      localStorage.setItem('language', 'en')
    }
    window.location.reload()
  }

  saveData(event:any){
    const formHtml:any = document.querySelector('.timesheet_form');
    let data:any = new FormData(formHtml);
    data = data.entries();
    let obj:any = data.next();
    let retrieved:any = {};
    while(undefined !== obj.value) {
      retrieved[obj.value[0]] = obj.value[1];
      obj = data.next();
    }
    console.log('retrieved: ',retrieved);

    event.preventDefault();
  }

}










