export interface BracketNode {
	id: string;
	title: string;
	imageUrl?: string;
	videoUrl?: string;
}

export interface Matchup {
	id: string;
	bracketNode1?: BracketNode;
	bracketNode2?: BracketNode;
	winner?: BracketNode;
}

export interface Bracket {
	id: string;
	title: string;
	size: BLength;
	numberOfRounds: number;
	description?: string;
	titleImageUrl?: string;
	rounds: Matchup[][];
}

export type BLength = 2 | 4 | 8 | 16 | 32 | 64 | 128;
