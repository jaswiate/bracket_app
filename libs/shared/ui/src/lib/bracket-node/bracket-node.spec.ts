import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BracketNode } from "./bracket-node";

describe("BracketNode", () => {
	let component: BracketNode;
	let fixture: ComponentFixture<BracketNode>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BracketNode],
		}).compileComponents();

		fixture = TestBed.createComponent(BracketNode);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the bracket node", () => {
		expect(component).toBeTruthy();
	});

	it("should render content", () => {
		const p = fixture.nativeElement.querySelector("p");
		expect(p).toBeTruthy();
		expect(p.textContent).toContain("bracket-node works");
	});
});
