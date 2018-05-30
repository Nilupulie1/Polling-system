import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSettingComponent } from './vote-setting.component';

describe('VoteSettingComponent', () => {
  let component: VoteSettingComponent;
  let fixture: ComponentFixture<VoteSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
