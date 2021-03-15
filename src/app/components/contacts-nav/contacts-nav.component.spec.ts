import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsNavComponent } from './contacts-nav.component'

import { RouterTestingModule } from '@angular/router/testing';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { By } from '@angular/platform-browser'
;

describe('ContactsNavComponent', () => {
  let component: ContactsNavComponent;
  let fixture: ComponentFixture<ContactsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsNavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// test case to check if the component is loaded properly
  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
  // it("should have mat-toolbar as header",() =>{
  //   let toolbar = fixture.debugElement.query(By.css('.mat-toolbar'))
  //   expect(toolbar).toBeTruthy();
  // })
  // it("should have checkComponent as an id",() =>{
  //     let check = fixture.debugElement.query(By.css("#checkCompnent"))
  //     console.log(check);
      
  // })
  // it("Should contain Menu as test" ,()=>{
  //   let toolbar = fixture.debugElement.query(By.css('#checkCompnent'))
  //   expect(toolbar.nativeElement.innerText).toBe('Menu');
  // })
  // it('should have mat-side-nav',() => {
  //   let check = fixture.debugElement.query(By.css("mat-sidenav-container"));
  //   expect(check).toBeTruthy();
  // })
  // it('Mat-side-nav should have mat-sidenav',() => {
  //   let check = fixture.debugElement.query(By.css("mat-sidenav-container mat-sidenav"));
  //   // expect(check).toBeTruthy();
  //   console.log(check);
    
  // })
    it("should have mat-toolbar as header",() =>{
    let toolbar = fixture.debugElement.queryAll(By.css('mat-toolbar'))
    // const component = toolbar.componentInstance;
    console.log("nester componet",component);
    
    //expect(toolbar).toBeTruthy();
  })
});
