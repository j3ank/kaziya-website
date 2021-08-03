import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  clearLocalStorage() {
    this.localStorageService.removeData('toDoList');
  }
}
