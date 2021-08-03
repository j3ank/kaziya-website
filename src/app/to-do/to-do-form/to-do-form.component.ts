import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService, ToDo, ToDoService} from "../../core";

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {
  public toDoForm: FormGroup;
  public toDoList: ToDo[] = [];

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private toDoService: ToDoService) {
    this.toDoForm = this.fb.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.toDoService.toDoList.subscribe(x => this.toDoList = x);
  }

  addToDo () {
    const index = this.toDoList.length;
    const newId = this.toDoList[index - 1].id + 1;
    const newToDo: ToDo = {
      id: newId,
      description: this.toDoForm.controls['description'].value,
      expirationDate: this.toDoForm.controls['date'].value,
      state: 0,
      isDeleted: false,
    }

    this.toDoList.push(newToDo);
    this.localStorageService.setData('toDoList', this.toDoList);

  }

  submitForm() {
    this.addToDo();
  }

  ngOnDestroy() {
    this.toDoService.toDoList.unsubscribe();
  }
}
