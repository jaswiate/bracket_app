import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddBracketButton } from "./add-bracket-button";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddBracketButton", () => {
	let component: AddBracketButton;
	let fixture: ComponentFixture<AddBracketButton>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AddBracketButton, RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(AddBracketButton);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the add bracket button", () => {
		expect(component).toBeTruthy();
	});

	it("should render a button with routerLink", () => {
		const button = fixture.nativeElement.querySelector("button");
		expect(button).toBeTruthy();
		expect(button.getAttribute("routerlink")).toBe("/create");
	});
});
