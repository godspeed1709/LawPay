import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAddComponent } from './details-add.component';

describe('DetailsAddComponent', () => {
  let component: DetailsAddComponent;
  let fixture: ComponentFixture<DetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
