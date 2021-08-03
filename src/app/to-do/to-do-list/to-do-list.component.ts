import {Component, OnDestroy, OnInit} from '@angular/core';
import { LocalStorageService, ToDo, ToDoService } from "../../core";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  public toDoList: ToDo[] = [];

  constructor(private localStorageService: LocalStorageService, private toDoService: ToDoService) {
    this.toDoService.updateToDoList(this.localStorageService.getData('toDoList'));
  }

  ngOnInit(): void {
    this.toDoService.toDoList.subscribe(x => this.toDoList = x);
  }

  changeState(toDo: ToDo) {
    const index = this.toDoList.findIndex(t => t.id === toDo.id);

    if (index >= 0) {
      if (this.toDoList[index].state === 0) {
        this.toDoList[index].state = 1;
      } else {
        this.toDoList[index].state = 0;
      }
    }

    this.toDoService.updateToDoList(this.toDoList);
  }

  remove(toDo: ToDo) {
    const index = this.toDoList.findIndex(t => t.id === toDo.id);
    if (index >= 0) {
      this.toDoList[index].isDeleted = true;
    }

    this.toDoService.updateToDoList(this.toDoList);
  }

  isToDoClosed(toDo: ToDo): boolean {
    return toDo.state === 1;
  }

  ngOnDestroy() {
    this.toDoService.toDoList.unsubscribe();
  }
}
