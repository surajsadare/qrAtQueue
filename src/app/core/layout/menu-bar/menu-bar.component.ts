import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  activeTab: string = 'home';

  constructor() {}
  ngOnInit(): void {}

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
