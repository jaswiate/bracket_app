import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetupMainView } from './setup-main-view';

describe('SetupMainView', () => {
  let component: SetupMainView;
  let fixture: ComponentFixture<SetupMainView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupMainView]
    }).compileComponents();

    fixture = TestBed.createComponent(SetupMainView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
