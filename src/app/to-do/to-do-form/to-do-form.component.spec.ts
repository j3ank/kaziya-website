import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFormComponent } from './to-do-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LocalStorageService} from "../../core";
import {MockService} from "../../core/services/mock.service";

describe('ToDoFormComponent', () => {
  let component: ToDoFormComponent;
  let fixture: ComponentFixture<ToDoFormComponent>;
  let localStorageService = LocalStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ToDoFormComponent ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
