import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMalhaComponent } from './cadastroMalha.component';

describe('CadastroMalhaComponent', () => {
  let component: CadastroMalhaComponent;
  let fixture: ComponentFixture<CadastroMalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMalhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
