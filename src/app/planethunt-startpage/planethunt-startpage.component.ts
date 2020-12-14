import { NgClass } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-startpage',
  templateUrl: 'planethunt-startpage.component.html'
})

export class PlanethuntStartpageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('logged baby!');
   }

   checkPlatformAndBrowser() {
    // Check for different iOS devices and Chrome
    var isIphone = navigator.userAgent.indexOf('iPhone') != -1;
    var isIpod = navigator.userAgent.indexOf('iPod') != -1;
    var isIpad = navigator.userAgent.indexOf('iPad') != -1;
    var isChrome = navigator.userAgent.indexOf('CriOS') != -1;
    // var isSafari = navigator.userAgent.indexOf('Safari') != -1;
    // Set one variable for all iOS devices
    var isIos = isIphone || isIpod || isIpad;
    // If Chrome on iOS is accessed, show alert below
    if (isIos && isChrome) {
        window.alert(
            'Desværre tillader Apple ikke AR oplevelser i din browser. Åben venligst Planetjagten'
        );
    }
};
}
