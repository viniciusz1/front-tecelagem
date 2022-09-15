import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalhaComponent } from './malha.component';

describe('MalhaComponent', () => {
  let component: MalhaComponent;
  let fixture: ComponentFixture<MalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
