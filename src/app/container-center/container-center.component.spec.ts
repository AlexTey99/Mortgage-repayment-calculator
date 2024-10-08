import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCenterComponent } from './container-center.component';

describe('ContainerCenterComponent', () => {
  let component: ContainerCenterComponent;
  let fixture: ComponentFixture<ContainerCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
