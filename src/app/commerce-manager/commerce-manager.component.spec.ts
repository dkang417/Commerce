import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceManagerComponent } from './commerce-manager.component';

describe('CommerceManagerComponent', () => {
  let component: CommerceManagerComponent;
  let fixture: ComponentFixture<CommerceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
