import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtUsComponent } from './abt-us.component';

describe('AbtUsComponent', () => {
  let component: AbtUsComponent;
  let fixture: ComponentFixture<AbtUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbtUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
