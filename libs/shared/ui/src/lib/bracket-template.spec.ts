import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BracketTemplate } from './bracket-template';

describe('BracketTemplate', () => {
  let component: BracketTemplate;
  let fixture: ComponentFixture<BracketTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketTemplate]
    }).compileComponents();

    fixture = TestBed.createComponent(BracketTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
