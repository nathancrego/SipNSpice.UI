import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktailHomeComponent } from './mocktail-home.component';

describe('MocktailHomeComponent', () => {
  let component: MocktailHomeComponent;
  let fixture: ComponentFixture<MocktailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MocktailHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MocktailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
