import { TestBed } from '@angular/core/testing';

import { CatalogCoursesService } from './catalog-courses.service';

describe('CatalogCoursesService', () => {
  let service: CatalogCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
