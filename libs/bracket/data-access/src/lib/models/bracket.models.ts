export interface BracketNode {
	id: string;
	title: string;
	imageUrl?: string;
	videoUrl?: string;
}

export class Matchup {
	id: string;
	bracketNode1?: BracketNode;
	bracketNode2?: BracketNode;
	winnerNode?: BracketNode;

	constructor(
		id: string,
		bracketNode1?: BracketNode,
		bracketNode2?: BracketNode
	) {
		this.id = id;
		this.bracketNode1 = bracketNode1;
		this.bracketNode2 = bracketNode2;
	}

	addNode(node: BracketNode): void {
		if (!this.bracketNode1) {
			this.bracketNode1 = node;
		} else if (!this.bracketNode2) {
			this.bracketNode2 = node;
		} else {
			throw new Error("Both combatants already added");
		}
	}

	get winner(): BracketNode | undefined {
		if (this.winnerNode) {
			return this.winnerNode;
		}
		if (this.bracketNode1 && !this.bracketNode2) {
			return this.bracketNode1;
		}
		if (!this.bracketNode1 && this.bracketNode2) {
			return this.bracketNode2;
		}
		return undefined;
	}
}

export interface Bracket {
	id: string;
	title: string;
	size: BLength;
	numberOfRounds: number;
	description?: string;
	imageUrl?: string;
	rounds: Matchup[][];
}

export type BLength = 2 | 4 | 8 | 16 | 32 | 64 | 128;

export interface NodeTemplateContext {
	$implicit: BracketNode | undefined;
	matchup: Matchup;
	roundIndex: number;
	side?: "left" | "right";
}
