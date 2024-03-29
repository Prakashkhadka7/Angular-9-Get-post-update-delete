import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateArmyComponent } from './create-army.component';

describe('CreateArmyComponent', () => {
  let component: CreateArmyComponent;
  let fixture: ComponentFixture<CreateArmyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
