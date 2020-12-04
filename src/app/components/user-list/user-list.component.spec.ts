import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { exampleResponse } from 'src/app/models/api-response';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render names in the list', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('.name'));
    expect(debugElements.length).toEqual(10);
    expect(debugElements.map((de: DebugElement) => (de.nativeNode.textContent)))
      .toEqual(exampleResponse.map((data) => (data.name)));
  });
});
