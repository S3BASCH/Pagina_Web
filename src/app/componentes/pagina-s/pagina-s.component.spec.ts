import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSComponent } from './pagina-s.component';

describe('PaginaSComponent', () => {
  let component: PaginaSComponent;
  let fixture: ComponentFixture<PaginaSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
