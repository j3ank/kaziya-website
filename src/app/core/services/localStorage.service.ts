import { Injectable } from "@angular/core";
import { ToDo } from "../models"

@Injectable()
export class LocalStorageService {
  private toDoExample: ToDo[] = [
    {
      id: 1,
      description: 'Work',
      expirationDate: new Date(),
      state: 0,
      isDeleted: false,
    },
    {
      id: 2,
      description: 'Work more',
      expirationDate: new Date(),
      state: 1,
      isDeleted: false,
    },
    {
      id: 3,
      description: 'Work till it works',
      expirationDate: new Date(),
      state: 0,
      isDeleted: false,
    }
  ];

  constructor() {
  }

  setData(key: string, data: ToDo[]) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
  }

  getData(key: string): ToDo[] {
     let data = localStorage.getItem(key);

     if(!data) {
       data = JSON.stringify(this.toDoExample);
     }

    return JSON.parse(data);
  }

  removeData(key: string) {
    localStorage.removeItem(key)
  }
}
