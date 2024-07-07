import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTestComponent } from './cards-test.component';

describe('CardsTestComponent', () => {
  let component: CardsTestComponent;
  let fixture: ComponentFixture<CardsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
