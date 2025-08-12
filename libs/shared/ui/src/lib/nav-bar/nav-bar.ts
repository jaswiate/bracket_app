import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { BracketStateService } from "@bracket-app/data-access";

@Component({
	selector: "lib-nav-bar",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./nav-bar.html",
	styleUrl: "./nav-bar.css",
})
export class NavBar {
	private bracketState = inject(BracketStateService);
	private router = inject(Router);

	isBracketReadyForVote = this.bracketState.isBracketReadyForVote;
	bracket = this.bracketState.bracket;

	startVoting(): void {
		const currentBracket = this.bracket();
		if (currentBracket) {
			this.router.navigate(["/vote", currentBracket.title]);
		}
	}
}
