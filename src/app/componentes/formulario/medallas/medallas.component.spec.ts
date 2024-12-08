import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallasComponent } from './medallas.component';

describe('MedallasComponent', () => {
  let component: MedallasComponent;
  let fixture: ComponentFixture<MedallasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedallasComponent]
    });
    fixture = TestBed.createComponent(MedallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
