import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FioComponent } from './fio.component';

describe('FioComponent', () => {
  let component: FioComponent;
  let fixture: ComponentFixture<FioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
