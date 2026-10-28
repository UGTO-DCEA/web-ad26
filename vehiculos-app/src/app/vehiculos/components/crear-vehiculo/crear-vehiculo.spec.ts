import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearVehiculo } from './crear-vehiculo';

describe('CrearVehiculo', () => {
  let component: CrearVehiculo;
  let fixture: ComponentFixture<CrearVehiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearVehiculo],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearVehiculo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
