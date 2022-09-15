import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFioComponent } from './cadastroFio.component';

describe('CadastroFioComponent', () => {
  let component: CadastroFioComponent;
  let fixture: ComponentFixture<CadastroFioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
