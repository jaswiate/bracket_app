import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BracketView } from "./bracket-view";

describe("BracketView", () => {
	let component: BracketView;
	let fixture: ComponentFixture<BracketView>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BracketView],
		}).compileComponents();

		fixture = TestBed.createComponent(BracketView);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the bracket view", () => {
		expect(component).toBeTruthy();
	});

	it("should render content", () => {
		const p = fixture.nativeElement.querySelector("p");
		expect(p).toBeTruthy();
		expect(p.textContent).toContain("bracket-view works");
	});
});
