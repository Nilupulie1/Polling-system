import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingMediasComponent } from './voting-medias.component';

describe('VotingMediasComponent', () => {
  let component: VotingMediasComponent;
  let fixture: ComponentFixture<VotingMediasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingMediasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
