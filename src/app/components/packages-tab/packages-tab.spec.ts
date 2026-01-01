import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesTab } from './packages-tab';

describe('PackagesTab', () => {
  let component: PackagesTab;
  let fixture: ComponentFixture<PackagesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
