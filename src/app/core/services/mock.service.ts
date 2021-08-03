import { Injectable } from '@angular/core';
import { Observable, of, defer } from 'rxjs';

import { fakeToDos } from './fake-data/toDo.fake';
import { ToDo } from "../models";

@Injectable()
export class MockService {
  public toDo: ToDo[] = fakeToDos();

  constructor() {
  }

  public getToDos(): ToDo[] {
    return this.toDo;
  }

  public addToDo(toDo: ToDo): ToDo {
    return toDo;
  }
}
