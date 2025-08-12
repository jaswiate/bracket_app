import { Bracket, Matchup } from "../models/bracket.models";

export function createMockRounds(
	numberOfRounds: number,
	size: number
): Matchup[][] {
	const rounds: Matchup[][] = [];
	for (let i = 0; i < numberOfRounds; i++) {
		const matchupsInThisRound = size / Math.pow(2, i + 1);
		const currentRound: Matchup[] = Array.from(
			{ length: matchupsInThisRound },
			() => new Matchup(crypto.randomUUID())
		);
		rounds.push(currentRound);
	}

	const firstRound = rounds[0];
	let combatantNumber = 1;

	firstRound.forEach((matchup) => {
		matchup.bracketNode1 = {
			id: crypto.randomUUID(),
			title: `Node ${combatantNumber++}`,
		};
		matchup.bracketNode2 = {
			id: crypto.randomUUID(),
			title: `Node ${combatantNumber++}`,
		};
	});

	return rounds;
}
