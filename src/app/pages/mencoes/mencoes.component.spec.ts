/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MencoesComponent } from './mencoes.component';

describe('MencoesComponent', () => {
  let component: MencoesComponent;
  let fixture: ComponentFixture<MencoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MencoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
