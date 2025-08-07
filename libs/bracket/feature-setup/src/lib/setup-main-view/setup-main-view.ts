import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BracketForm } from "../bracket-form/bracket-form";
import { BracketPreview } from "../bracket-preview/bracket-preview";
import { Bracket } from "@bracket-app/data-access";

@Component({
	selector: "lib-setup-main-view",
	standalone: true,
	imports: [CommonModule, BracketForm, BracketPreview],
	templateUrl: "./setup-main-view.html",
	styleUrl: "./setup-main-view.css",
})
export class SetupMainView {
	bracket?: Bracket;
	shiftRight = false;

	onBracketCreated(bracket: Bracket) {
		this.bracket = bracket;
		this.shiftRight = true;
	}
}
