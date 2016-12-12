/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddComplaintProductComponent } from './add-complaint-product.component';

describe('AddComplaintProductComponent', () => {
  let component: AddComplaintProductComponent;
  let fixture: ComponentFixture<AddComplaintProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComplaintProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplaintProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
