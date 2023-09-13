import {Component, HostBinding, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-timework',
  templateUrl: './timework.component.html',
  styleUrls: ['./timework.component.scss']
})
export class TimeworkComponent implements OnInit {
  inputVal1: string = '';
  inputVal2: string = '';
  form: any;
  toggle = false;
  weekDays: string[] = [
    'saturday',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
  ];
  weekDaysToggle: any = {
    'saturday' : false,
    'sunday' : false,
    'monday' : false,
    'tuesday' : false,
    'wednesday' : false,
    'thursday' : false,
    'friday' : false,
  };



  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  duplicatedTimeRow(clickedEle: any, appendWithValues=false, event: MouseEvent) {

    let dayRowEle = clickedEle.closest(".day_row");
    let timeRowEle = dayRowEle.querySelector('.time_row').cloneNode(true);

    if (!appendWithValues){
      timeRowEle.querySelectorAll("input").forEach(function (ele: any){
        ele.value = "";
      });
    }

    let timeRowsParentEle = dayRowEle.querySelector(".time_parent_rows");
    if (timeRowsParentEle !== null){
      timeRowsParentEle.appendChild(timeRowEle);
    }

    event.preventDefault()

  }

  toggleCon(day: any) {
    this.weekDaysToggle[day] = !this.weekDaysToggle[day];
  }



}












