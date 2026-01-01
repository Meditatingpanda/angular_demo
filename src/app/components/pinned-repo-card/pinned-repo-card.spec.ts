import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedRepoCard } from './pinned-repo-card';

describe('PinnedRepoCard', () => {
  let component: PinnedRepoCard;
  let fixture: ComponentFixture<PinnedRepoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinnedRepoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedRepoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
