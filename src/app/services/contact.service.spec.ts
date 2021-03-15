import { TestBed,getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactService } from './contact.service';
import {Contact} from '../model/contact';

  let service:ContactService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });
    injector = getTestBed();
    service = injector.get(ContactService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  fdescribe('ContactService', () => {
  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts = [ {
      id: 1,
      name: "Kohl",
      email: "virt@icc.com",
      mobile: 9999911111
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahl@icc.com",
      mobile: 9999922222
    }];
    const contact: Contact= {
      id: 3,
      name: "Rahul11",
      email: "rahl@icc.com",
      mobile: 9999922222
    }
    //const service: ContactService = TestBed.get(ContactService);
    console.log(service.getAllContacts().subscribe(user => 
      console.log("--------",user.length)
     
      
    ));

    const req = httpMock.expectOne('http://localhost:3000/api/v1/contacts');
    expect(req.request.method).toBe("GET");
    req.flush(dummyPosts);
 });
});

