import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cadastroItemComponent } from './cadastroItem.component';

describe('cadastroItemComponent', () => {
  let component: cadastroItemComponent;
  let fixture: ComponentFixture<cadastroItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cadastroItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cadastroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
