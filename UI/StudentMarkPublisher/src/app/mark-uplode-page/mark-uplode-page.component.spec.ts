import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkUplodePageComponent } from './mark-uplode-page.component';

describe('MarkUplodePageComponent', () => {
  let component: MarkUplodePageComponent;
  let fixture: ComponentFixture<MarkUplodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkUplodePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkUplodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
