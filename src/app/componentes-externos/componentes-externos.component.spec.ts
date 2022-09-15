import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesExternosComponent } from './componentes-externos.component';

describe('ComponentesExternosComponent', () => {
  let component: ComponentesExternosComponent;
  let fixture: ComponentFixture<ComponentesExternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesExternosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
