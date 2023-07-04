import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsliderComponent } from './thumbslider.component';

describe('ThumbsliderComponent', () => {
  let component: ThumbsliderComponent;
  let fixture: ComponentFixture<ThumbsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
