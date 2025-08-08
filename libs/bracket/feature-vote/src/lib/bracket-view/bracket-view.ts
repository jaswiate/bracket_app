import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Bracket, BracketNode, Matchup } from "@bracket-app/data-access";

@Component({
	selector: "lib-bracket-view",
	imports: [CommonModule],
	templateUrl: "./bracket-view.html",
	styleUrl: "./bracket-view.css",
})
export class BracketView {
	bracket = input.required<Bracket>();
	winnerSelected = output<{ winner: BracketNode; matchup: Matchup }>();

	selectWinner(winner: BracketNode, matchup: Matchup): void {
		this.winnerSelected.emit({ winner, matchup });
	}
}
