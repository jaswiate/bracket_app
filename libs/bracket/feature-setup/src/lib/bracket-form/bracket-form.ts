import { Component, EventEmitter, output, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	ReactiveFormsModule,
	FormBuilder,
	Validators,
	FormGroup,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { type BLength, Bracket, Matchup } from "@bracket-app/data-access";

@Component({
	selector: "lib-bracket-form",
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonToggleModule,
	],
	templateUrl: "./bracket-form.html",
	styleUrl: "./bracket-form.css",
})
export class BracketForm {
	bracketCreated = output<Bracket>();

	private fb = inject(FormBuilder);
	imageUrlPattern = "https?://.+\\.(jpg|jpeg|png|webp)";

	bracketForm: FormGroup = this.fb.group({
		title: ["xd", Validators.required],
		size: [16 as BLength, Validators.required],
		description: ["xd"],
		titleImageUrl: [
			"https://xd.png",
			Validators.pattern(this.imageUrlPattern),
		],
	});

	onSubmit() {
		if (this.bracketForm.valid) {
			const formValue = this.bracketForm.value;
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

			const bracket: Bracket = {
				id: crypto.randomUUID(),
				title: formValue.title,
				size,
				numberOfRounds,
				description: formValue.description,
				imageUrl: formValue.titleImageUrl,
				rounds: rounds,
			};

			this.bracketCreated.emit(bracket);
			console.log("Bracket created:", bracket);
		} else {
			console.error("Bracket Form is invalid");
		}
	}
}
