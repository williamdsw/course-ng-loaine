import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiretivasCustomizadasComponent } from './diretivas-customizadas.component';

describe('DiretivasCustomizadasComponent', () => {
  let component: DiretivasCustomizadasComponent;
  let fixture: ComponentFixture<DiretivasCustomizadasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCustomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
