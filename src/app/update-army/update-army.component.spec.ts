import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateArmyComponent } from './update-army.component';

describe('UpdateArmyComponent', () => {
  let component: UpdateArmyComponent;
  let fixture: ComponentFixture<UpdateArmyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
