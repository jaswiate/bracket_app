import { Component, computed, input, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Bracket, NodeTemplateContext } from "@bracket-app/data-access";

@Component({
	selector: "lib-bracket-template",
	imports: [CommonModule],
	templateUrl: "./bracket-template.html",
	styleUrl: "./bracket-template.css",
})
export class BracketTemplate {
	bracket = input.required<Bracket>();
	nodeTemplate = input.required<TemplateRef<NodeTemplateContext>>();

	leftRounds = computed(() => {
		if (!this.bracket().rounds) return [];
		const preliminaryRounds = this.bracket().rounds.slice(0, -1);
		return preliminaryRounds.map((round) =>
			round.slice(0, round.length / 2)
		);
	});

	finalRound = computed(() => {
		return this.bracket().rounds[this.bracket().rounds.length - 1] || null;
	});

	rightRounds = computed(() => {
		if (!this.bracket().rounds) return [];
		const preliminaryRounds = this.bracket().rounds.slice(0, -1);
		return preliminaryRounds.map((round) => round.slice(round.length / 2));
	});

	getConnectorLineHeight(roundIndex: number): string {
		const nodeHeight = 2;
		const matchupGap = 2;
		let height = nodeHeight * 4 + matchupGap;

		for (let i = 0; i < roundIndex; i++) {
			height = height * 2 - matchupGap / 3;
		}
		return `${height}rem`;
	}
}
