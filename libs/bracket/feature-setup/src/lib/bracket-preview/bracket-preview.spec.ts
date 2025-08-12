// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { BracketPreview } from "./bracket-preview";
// import { NoopAnimationsModule } from "@angular/platform-browser/animations";

// describe("BracketPreview", () => {
// 	let component: BracketPreview;
// 	let fixture: ComponentFixture<BracketPreview>;

// 	beforeEach(async () => {
// 		await TestBed.configureTestingModule({
// 			imports: [BracketPreview, NoopAnimationsModule],
// 		}).compileComponents();

// 		fixture = TestBed.createComponent(BracketPreview);
// 		component = fixture.componentInstance;
// 		component.bracket = {
// 			id: "1",
// 			title: "Test Bracket",
// 			size: 4,
// 			numberOfRounds: 2,
// 			rounds: [],
// 		};
// 		fixture.detectChanges();
// 	});

// 	it("should create", () => {
// 		expect(component).toBeTruthy();
// 	});

// 	it("should emit nodeClicked event for the first round on the left side", () => {
// 		spyOn(component.nodeClicked, "emit");
// 		const matchup = new Matchup("1");
// 		component.handleNodeClick(matchup, 0, "left");
// 		expect(component.nodeClicked.emit).toHaveBeenCalledWith(matchup);
// 	});
// });
