import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BracketForm } from './bracket-form';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('BracketForm', () => {
  let component: BracketForm;
  let fixture: ComponentFixture<BracketForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketForm, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BracketForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form', () => {
    expect(component).toBeTruthy();
    expect(component.bracketForm).toBeDefined();
  });

  it('should not continue if title or size is invalid', () => {
    component.bracketForm.get('title')?.setValue('');
    component.bracketForm.get('size')?.setValue(null);
    component.continue();
    expect(component.step).toBe(1);
  });

  it('should continue to step 2 if title and size are valid', () => {
    component.bracketForm.get('title')?.setValue('Bracket');
    component.bracketForm.get('size')?.setValue(4);
    component.continue();
    expect(component.step).toBe(2);
  });

  it('should add and remove combatants', () => {
    expect(component.combatants.length).toBe(0);
    component.addCombatant();
    expect(component.combatants.length).toBe(1);
    component.removeCombatant(0);
    expect(component.combatants.length).toBe(0);
  });

  it('should not remove combatant if index is invalid', () => {
    component.addCombatant();
    component.removeCombatant(5);
    expect(component.combatants.length).toBe(1);
  });

  it('should log form value on valid submit', () => {
    spyOn(console, 'log');
    component.bracketForm.get('title')?.setValue('Bracket');
    component.bracketForm.get('size')?.setValue(4);
    component.onSubmit();
    expect(console.log).toHaveBeenCalled();
  });

  it('should log error on invalid submit', () => {
    spyOn(console, 'error');
    component.bracketForm.get('title')?.setValue('');
    component.onSubmit();
    expect(console.error).toHaveBeenCalled();
  });
});
