import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	BracketNode,
	BracketStateService,
	BSide,
	Matchup,
} from "@bracket-app/data-access";
import { BracketTemplate } from "@bracket-app/ui";

@Component({
	selector: "lib-bracket-view",
	imports: [CommonModule, BracketTemplate],
	templateUrl: "./bracket-view.html",
	styleUrl: "./bracket-view.css",
})
export class BracketView {
	private bracketState = inject(BracketStateService);

	bracket = this.bracketState.bracket;
	winner = this.bracketState.winner;

	selectWinner(
		node: BracketNode,
		matchup: Matchup,
		roundIndex: number,
		side: BSide
	) {
		if (!matchup.bracketNode1 || !matchup.bracketNode2) {
			return;
		}
		this.bracketState.updateNextMatchup(node, matchup, roundIndex, side);
	}
}
