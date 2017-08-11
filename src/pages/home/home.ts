import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IMyDateModel, IMyDpOptions} from 'mydatepicker';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public workDate = new Date();
  public selDate = new Date();

  constructor() {
    this.workDate = new Date();
  }

  ngOnInit() {
    // Datum vorbelegen
    this.model = { date: { year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDay() } };

  }

  public myDatePickerOptions: IMyDpOptions = {
    // DE-Texte
    todayBtnTxt: 'Heute',
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false,
    disableUntil: {year: this.workDate.getFullYear()-1, month: this.workDate.getMonth()+1, day: this.workDate.getUTCDay()},
    dayLabels: {su: 'So', mo: 'Mo', tu: 'Di', we: 'Mi', th: 'Do', fr: 'Fr', sa: 'Sa'},
    monthLabels: { 1: 'Jan', 2: 'Feb', 3: 'Mär', 4: 'Apr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Okt', 11: 'Nov', 12: 'Dez' },
    width:'80%',
    selectionTxtFontSize:'16px'
    // selectorHeight:'100',
    // selectorWidth:'120'
  };

  // Initialized to specific date
 public model: Object = { date: { year: this.workDate.getFullYear(), month: this.workDate.getMonth()+1, day: this.workDate.getDay() } };


  onDateChanged(event: IMyDateModel) {
    // console.log('onDateChanged() ');
    this.selDate=event.jsdate;
  }

}
