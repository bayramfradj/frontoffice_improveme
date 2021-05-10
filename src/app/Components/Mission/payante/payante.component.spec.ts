import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayanteComponent } from './payante.component';

describe('PayanteComponent', () => {
  let component: PayanteComponent;
  let fixture: ComponentFixture<PayanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
