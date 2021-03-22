import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaAddDetailsComponent } from './pizza-add-details.component';

describe('PizzaAddDetailsComponent', () => {
  let component: PizzaAddDetailsComponent;
  let fixture: ComponentFixture<PizzaAddDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaAddDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
