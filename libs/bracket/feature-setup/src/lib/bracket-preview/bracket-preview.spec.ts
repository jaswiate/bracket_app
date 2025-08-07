import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BracketPreview } from './bracket-preview';

describe('BracketPreview', () => {
  let component: BracketPreview;
  let fixture: ComponentFixture<BracketPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketPreview]
    }).compileComponents();

    fixture = TestBed.createComponent(BracketPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
