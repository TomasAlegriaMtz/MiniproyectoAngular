import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminuevosComponent } from './seminuevos.component';

describe('SeminuevosComponent', () => {
  let component: SeminuevosComponent;
  let fixture: ComponentFixture<SeminuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminuevosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
