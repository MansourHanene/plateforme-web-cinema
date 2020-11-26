import { TestBed } from '@angular/core/testing';

import { ProgFilmService } from './prog-film.service';

describe('ProgFilmService', () => {
  let service: ProgFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
