import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktailDetailsComponent } from './mocktail-details.component';

describe('MocktailDetailsComponent', () => {
  let component: MocktailDetailsComponent;
  let fixture: ComponentFixture<MocktailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MocktailDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MocktailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
