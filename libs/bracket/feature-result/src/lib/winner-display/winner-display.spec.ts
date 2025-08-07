import { ComponentFixture, TestBed } from "@angular/core/testing";
import { WinnerDisplay } from "./winner-display";

describe("WinnerDisplay", () => {
	let component: WinnerDisplay;
	let fixture: ComponentFixture<WinnerDisplay>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WinnerDisplay],
		}).compileComponents();

		fixture = TestBed.createComponent(WinnerDisplay);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the winner display", () => {
		expect(component).toBeTruthy();
	});

	it("should render content", () => {
		const p = fixture.nativeElement.querySelector("p");
		expect(p).toBeTruthy();
		expect(p.textContent).toContain("winner-display works");
	});
});
