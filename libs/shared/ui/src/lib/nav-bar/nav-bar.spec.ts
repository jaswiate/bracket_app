import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavBar } from "./nav-bar";

describe("NavBar", () => {
	let component: NavBar;
	let fixture: ComponentFixture<NavBar>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NavBar],
		}).compileComponents();

		fixture = TestBed.createComponent(NavBar);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the nav bar", () => {
		expect(component).toBeTruthy();
	});

	it("should render nav element", () => {
		const nav = fixture.nativeElement.querySelector("nav");
		expect(nav).toBeTruthy();
		expect(nav.classList).toContain("nav-bar-container");
	});
});
