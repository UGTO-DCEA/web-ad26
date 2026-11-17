import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      imports: [MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
