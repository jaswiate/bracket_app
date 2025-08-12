import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BracketNodeForm } from "./bracket-node-form";
import { ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("BracketNodeForm", () => {
	let component: BracketNodeForm;
	let fixture: ComponentFixture<BracketNodeForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				BracketNodeForm,
				ReactiveFormsModule,
				NoopAnimationsModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(BracketNodeForm);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should emit formSubmitted event on save", () => {
		spyOn(component.formSubmitted, "emit");
		component.nodeForm.get("title")?.setValue("Test Node");
		component.save();
		expect(component.formSubmitted.emit).toHaveBeenCalled();
	});

	it("should not emit formSubmitted event if form is invalid", () => {
		spyOn(component.formSubmitted, "emit");
		component.save();
		expect(component.formSubmitted.emit).not.toHaveBeenCalled();
	});

	it("should emit formClosed event on cancel", () => {
		spyOn(component.formClosed, "emit");
		component.cancel();
		expect(component.formClosed.emit).toHaveBeenCalled();
	});
});
