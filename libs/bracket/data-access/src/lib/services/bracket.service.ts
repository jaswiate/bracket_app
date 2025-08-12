import { FormGroup } from "@angular/forms";
import { BLength, Bracket, Matchup } from "../models/bracket.models";
import { createMockRounds } from "./bracket-mock";

export function createBracket(bracketForm: FormGroup): Bracket {
	const formValue = bracketForm.value;
	const size: BLength = Number(formValue.size) as BLength;
	const numberOfRounds = Math.log2(size);

	const rounds: Matchup[][] = [];
	for (let i = 0; i < numberOfRounds; i++) {
		const matchupsInThisRound = size / Math.pow(2, i + 1);
		const currentRound: Matchup[] = Array.from(
			{ length: matchupsInThisRound },
			() => new Matchup(crypto.randomUUID())
		);
		rounds.push(currentRound);
	}
	rounds[numberOfRounds - 1][0].isFinalMatchup = true;

	const bracket: Bracket = {
		id: crypto.randomUUID(),
		title: formValue.title,
		size,
		numberOfRounds,
		description: formValue.description,
		imageUrl: formValue.titleImageUrl,
		rounds: createMockRounds(numberOfRounds, size),
	};

	return bracket;
}
