import { Injectable } from "@angular/core";
import { ToDo } from "../models"
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "./localStorage.service";


@Injectable()
export class ToDoService {
  public toDoList = new BehaviorSubject<ToDo[]>([]);

  constructor(private localStorageService: LocalStorageService) {
  }

  updateToDoList(toDoList: ToDo[]) {
    this.toDoList.next(toDoList);
    this.localStorageService.setData('toDoList', toDoList);
  }
}
