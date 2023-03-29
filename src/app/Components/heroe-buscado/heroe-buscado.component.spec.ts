import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeBuscadoComponent } from './heroe-buscado.component';

describe('HeroeBuscadoComponent', () => {
  let component: HeroeBuscadoComponent;
  let fixture: ComponentFixture<HeroeBuscadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeBuscadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeBuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
