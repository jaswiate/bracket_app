import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Bracket } from "@bracket-app/data-access";

@Component({
	selector: "lib-bracket-preview",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./bracket-preview.html",
	styleUrl: "./bracket-preview.css",
})
export class BracketPreview {
	bracket = input.required<Bracket>();

	onInit() {
		console.log("BracketPreview initialized with bracket:", this.bracket());
	}

	leftRounds = computed(() => {
		if (!this.bracket().rounds) return [];
		const preliminaryRounds = this.bracket().rounds.slice(0, -1);
		console.log("Preliminary rounds left:", preliminaryRounds);
		return preliminaryRounds.map((round) =>
			round.slice(0, round.length / 2)
		);
	});

	finalRound = computed(() => {
		if (!this.bracket().rounds || this.bracket().rounds.length === 0)
			return null;
		return this.bracket().rounds[this.bracket().rounds.length - 1];
	});

	rightRounds = computed(() => {
		if (!this.bracket().rounds) return [];
		const preliminaryRounds = this.bracket().rounds.slice(0, -1);
		console.log("Preliminary rounds right:", preliminaryRounds);
		return preliminaryRounds.map((round) => round.slice(round.length / 2));
	});

	getConnectorLineHeight(roundIndex: number): string {
		const nodeHeight = 2;
		const matchupGap = 2;
		let height = 2 * nodeHeight ** 2 + matchupGap;

		for (let i = 0; i < roundIndex; i++) {
			height = height * 2;
		}
		return `${height}rem`;
	}
}
