import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiciplinasComponent } from './diciplinas.component';

describe('DiciplinasComponent', () => {
  let component: DiciplinasComponent;
  let fixture: ComponentFixture<DiciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiciplinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
