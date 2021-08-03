import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import {LocalStorageService, ToDoService} from "../../core";
import {FormBuilder, FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared";
import {MockService} from "../../core/services/mock.service";
import {ActivatedRoute} from "@angular/router";
import {ActivatedRouteStub} from "../../core/services/router-stubs";
import {RouterTestingModule} from "@angular/router/testing";

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;
  let activatedRoute: ActivatedRouteStub;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, FormsModule, RouterTestingModule, LocalStorageService ],
      declarations: [ ToDoListComponent, ActivatedRoute, LocalStorageService ],
      providers: [
        { provide: LocalStorageService, useClass: MockService },
        { provide: ToDoService, useClass: MockService },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {params: 'auth'}
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
