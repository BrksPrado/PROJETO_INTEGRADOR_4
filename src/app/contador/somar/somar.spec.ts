import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somar } from './somar';

describe('Somar', () => {
  let component: Somar;
  let fixture: ComponentFixture<Somar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Somar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Somar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
