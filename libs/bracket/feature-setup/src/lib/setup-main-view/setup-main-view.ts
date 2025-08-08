import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BracketForm } from "../bracket-form/bracket-form";
import { BracketPreview } from "../bracket-preview/bracket-preview";
import { Bracket, BracketNode, Matchup } from "@bracket-app/data-access";
import { BracketNodeForm } from "../bracket-node-form/bracket-node-form";

@Component({
	selector: "lib-setup-main-view",
	standalone: true,
	imports: [CommonModule, BracketForm, BracketPreview, BracketNodeForm],
	templateUrl: "./setup-main-view.html",
	styleUrl: "./setup-main-view.css",
})
export class SetupMainView {
	bracket = signal<Bracket | undefined>(undefined);
	editingMatchup = signal<Matchup | null>(null);

	onBracketCreated(bracket: Bracket) {
		this.bracket.set(bracket);
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
