import { Component, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BracketForm } from "../bracket-form/bracket-form";
import { BracketPreview } from "../bracket-preview/bracket-preview";
import {
	Bracket,
	BracketNode,
	BracketStateService,
	Matchup,
} from "@bracket-app/data-access";
import { BracketNodeForm } from "../bracket-node-form/bracket-node-form";

@Component({
	selector: "lib-setup-main-view",
	standalone: true,
	imports: [CommonModule, BracketForm, BracketPreview, BracketNodeForm],
	templateUrl: "./setup-main-view.html",
	styleUrl: "./setup-main-view.css",
})
export class SetupMainView {
	private bracketState = inject(BracketStateService);

	bracket = this.bracketState.bracket;
	editingMatchup = signal<Matchup | null>(null);
	isBracketReady = this.bracketState.isBracketReadyForVote;

	onBracketCreated(bracket: Bracket) {
		this.bracketState.setBracket(bracket);
	}

	handleNodeClick(matchup: Matchup) {
		this.editingMatchup.set(matchup);
	}

	closeModal() {
		this.editingMatchup.set(null);
	}

	saveNode(newNode: BracketNode) {
		const matchup = this.editingMatchup();
		if (matchup) {
			matchup.addNode(newNode);
		}
		this.closeModal();
	}
}
