import { Component, computed, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Bracket, BracketNode, Matchup } from "@bracket-app/data-access";
import { BracketTemplate } from "@bracket-app/ui";

@Component({
	selector: "lib-bracket-preview",
	standalone: true,
	imports: [CommonModule, BracketTemplate],
	templateUrl: "./bracket-preview.html",
	styleUrl: "./bracket-preview.css",
})
export class BracketPreview {
	bracket = input.required<Bracket>();
	nodeClicked = output<Matchup>();

	handleNodeClick(
		matchup: Matchup,
		roundIndex: number,
		side: "left" | "right"
	) {
		console.log(
			"Bracket preview clicked:",
			matchup,
			roundIndex,
			side,
			this.bracket().numberOfRounds
		);
		if (side == "left" && roundIndex === 0) {
			console.log("Node clicked:", matchup);
			console.log("Round index:", roundIndex);
			this.nodeClicked.emit(matchup);
		} else if (
			side == "right" &&
			roundIndex === this.bracket().numberOfRounds - 2
		) {
			console.log("Node clicked:", matchup);
			console.log("Round index:", roundIndex);
			this.nodeClicked.emit(matchup);
		} else {
			console.warn("Node click ignored for round index:", roundIndex);
		}
	}
}
