import { Component, output, inject } from "@angular/core";
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
import { type BLength, Bracket } from "@bracket-app/data-access";
import { createBracket } from "@bracket-app/data-access";

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
		title: ["mock", Validators.required],
		size: [16 as BLength, Validators.required],
		description: ["mock"],
		titleImageUrl: [
			"https://mock.png",
			Validators.pattern(this.imageUrlPattern),
		],
	});

	onSubmit() {
		if (this.bracketForm.valid) {
			const bracket = createBracket(this.bracketForm);

			this.bracketCreated.emit(bracket);
			console.log("Bracket created:", bracket);
		} else {
			console.error("Bracket Form is invalid");
		}
	}
}
