import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionproductoComponent } from './informacionproducto.component';

describe('InformacionproductoComponent', () => {
  let component: InformacionproductoComponent;
  let fixture: ComponentFixture<InformacionproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
