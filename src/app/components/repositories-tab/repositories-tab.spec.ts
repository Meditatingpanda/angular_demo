import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesTab } from './repositories-tab';

describe('RepositoriesTab', () => {
  let component: RepositoriesTab;
  let fixture: ComponentFixture<RepositoriesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoriesTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
