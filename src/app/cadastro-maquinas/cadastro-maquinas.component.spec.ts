import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cadastroMaquinasComponent } from './cadastro-maquinas.component';

describe('cadastroItemComponent', () => {
  let component: cadastroMaquinasComponent;
  let fixture: ComponentFixture<cadastroMaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cadastroMaquinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cadastroMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
