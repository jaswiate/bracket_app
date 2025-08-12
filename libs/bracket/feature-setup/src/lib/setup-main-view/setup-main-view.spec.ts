// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { SetupMainView } from "./setup-main-view";
// import { BracketStateService } from "@bracket-app/data-access";
// import { NoopAnimationsModule } from "@angular/platform-browser/animations";

// describe("SetupMainView", () => {
// 	let component: SetupMainView;
// 	let fixture: ComponentFixture<SetupMainView>;
// 	let bracketStateService: BracketStateService;

// 	beforeEach(async () => {
// 		await TestBed.configureTestingModule({
// 			imports: [SetupMainView, NoopAnimationsModule],
// 			providers: [BracketStateService],
// 		}).compileComponents();

// 		fixture = TestBed.createComponent(SetupMainView);
// 		component = fixture.componentInstance;
// 		bracketStateService = TestBed.inject(BracketStateService);
// 		fixture.detectChanges();
// 	});

// 	it("should create", () => {
// 		expect(component).toBeTruthy();
// 	});

// 	it("should set the bracket on onBracketCreated", () => {
// 		spyOn(bracketStateService, "setBracket");
// 		const bracket = {
// 			id: "1",
// 			title: "Test Bracket",
// 			size: 4,
// 			numberOfRounds: 2,
// 			rounds: [],
// 		};
// 		component.onBracketCreated(bracket);
// 		expect(bracketStateService.setBracket).toHaveBeenCalledWith(bracket);
// 	});

// 	it("should open and close the modal", () => {
// 		const matchup = { id: "1" };
// 		component.handleNodeClick(matchup as any);
// 		expect(component.editingMatchup()).toEqual(matchup as any);

// 		component.closeModal();
// 		expect(component.editingMatchup()).toBeNull();
// 	});
// });
