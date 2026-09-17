import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Simpsons } from './simpsons';

describe('Simpsons', () => {
  let component: Simpsons;
  let fixture: ComponentFixture<Simpsons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simpsons],
    }).compileComponents();

    fixture = TestBed.createComponent(Simpsons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
