import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsEditOpenerComponent } from './contacts-edit-opener.component';

describe('ContactsEditOpenerComponent', () => {
  let component: ContactsEditOpenerComponent;
  let fixture: ComponentFixture<ContactsEditOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsEditOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
