/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtividadesComponent } from './atividades.component';

describe('AtividadesComponent', () => {
  let component: AtividadesComponent;
  let fixture: ComponentFixture<AtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
