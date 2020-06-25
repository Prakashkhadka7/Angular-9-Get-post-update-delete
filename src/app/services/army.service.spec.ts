import { TestBed } from '@angular/core/testing';

import { ArmyService } from './army.service';

describe('ArmyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArmyService = TestBed.get(ArmyService);
    expect(service).toBeTruthy();
  });
});
