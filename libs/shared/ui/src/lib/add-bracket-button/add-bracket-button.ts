import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "lib-add-bracket-button",
	standalone: true,
	imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
	templateUrl: "./add-bracket-button.html",
	styleUrl: "./add-bracket-button.css",
})
export class AddBracketButton {}
