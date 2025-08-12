import { Injectable, signal, computed } from "@angular/core";
import { Bracket, BracketNode, BSide, Matchup } from "../models/bracket.models";

@Injectable({
	providedIn: "root",
})
export class BracketStateService {
	private _bracket = signal<Bracket | null>(null);
	private _winner = signal<BracketNode | null>(null);

	public readonly bracket = this._bracket.asReadonly();
	public readonly winner = this._winner.asReadonly();

	public readonly isBracketReadyForVote = computed(() => {
		const br = this._bracket();
		if (!br || !br.rounds || br.rounds.length === 0) {
			return false;
		}
		const firstRound = br.rounds[0];
		return firstRound.every(
			(matchup) =>
				matchup.bracketNode1?.title !== "" &&
				matchup.bracketNode2?.title !== ""
		);
	});

	updateNextMatchup(
		winningNode: BracketNode,
		matchup: Matchup,
		roundIndex: number,
		side: BSide
	) {
		const currentBracket = this._bracket();
		if (!currentBracket) return;

		matchup.setWinner(winningNode);
		if (roundIndex === -1) {
			this._winner.set(winningNode);
			return;
		}
		const currentRound =
			side === "left"
				? currentBracket.rounds[roundIndex]
				: currentBracket.rounds[
						currentBracket.numberOfRounds - 2 - roundIndex
				  ];
		const nextRound =
			side === "left"
				? currentBracket.rounds[roundIndex + 1]
				: currentBracket.rounds[
						currentBracket.numberOfRounds - 1 - roundIndex
				  ];

		const matchupIndex = currentRound.findIndex((m) => m.id === matchup.id);

		const nextMatchupIndex = Math.floor(matchupIndex / 2);
		const nextMatchup = nextRound[nextMatchupIndex];
		console.log(currentRound, nextRound, matchupIndex, nextMatchupIndex);

		if (matchupIndex % 2 === 0) {
			nextMatchup.bracketNode1 = winningNode;
		} else {
			nextMatchup.bracketNode2 = winningNode;
		}
	}

	setBracket(bracket: Bracket): void {
		this._bracket.set(bracket);
	}

	clearBracket(): void {
		this._bracket.set(null);
	}
}
