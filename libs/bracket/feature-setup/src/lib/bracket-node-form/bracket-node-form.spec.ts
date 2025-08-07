import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BracketNodeForm } from './bracket-node-form';

describe('BracketNodeForm', () => {
  let component: BracketNodeForm;
  let fixture: ComponentFixture<BracketNodeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketNodeForm]
    }).compileComponents();

    fixture = TestBed.createComponent(BracketNodeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
