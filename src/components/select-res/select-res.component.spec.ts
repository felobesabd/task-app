import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResComponent } from './select-res.component';

describe('SelectResComponent', () => {
  let component: SelectResComponent;
  let fixture: ComponentFixture<SelectResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectResComponent]
    });
    fixture = TestBed.createComponent(SelectResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
