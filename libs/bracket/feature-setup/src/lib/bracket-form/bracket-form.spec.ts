import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BracketForm } from "./bracket-form";
import { ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

describe("BracketForm", () => {
	let component: BracketForm;
	let fixture: ComponentFixture<BracketForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				BracketForm,
				ReactiveFormsModule,
				NoopAnimationsModule,
				MatSelectModule,
				MatFormFieldModule,
				MatInputModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(BracketForm);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the form", () => {
		expect(component).toBeTruthy();
		expect(component.bracketForm).toBeDefined();
	});

	it("should not emit bracketCreated event if form is invalid", () => {
		spyOn(component.bracketCreated, "emit");
		component.bracketForm.get("title")?.setValue("");
		component.onSubmit();
		expect(component.bracketCreated.emit).not.toHaveBeenCalled();
	});

	it("should emit bracketCreated event if form is valid", () => {
		spyOn(component.bracketCreated, "emit");
		component.bracketForm.get("title")?.setValue("Test Bracket");
		component.bracketForm.get("size")?.setValue(8);
		component.onSubmit();
		expect(component.bracketCreated.emit).toHaveBeenCalled();
	});

	it("should log an error on invalid submit", () => {
		spyOn(console, "error");
		component.bracketForm.get("title")?.setValue("");
		component.onSubmit();
		expect(console.error).toHaveBeenCalledWith("Bracket Form is invalid");
	});
});
