import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	ReactiveFormsModule,
	FormBuilder,
	FormArray,
	Validators,
	FormGroup,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { type BLength } from "@bracket-app/data-access";

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
	],
	templateUrl: "./bracket-form.html",
	styleUrl: "./bracket-form.css",
})
export class BracketForm {
	private fb = inject(FormBuilder);

	bracketForm: FormGroup = this.fb.group({
		title: ["", Validators.required],
		size: [2, Validators.required],
		description: [""],
		titleImageUrl: [""],
		rounds: this.fb.array([]),
	});

	get combatants(): FormArray {
		return this.bracketForm.get("rounds") as FormArray;
	}

	createCombatantGroup(): FormGroup {
		return this.fb.group({
			title: ["", Validators.required],
			imageUrl: [""],
			videoUrl: [""],
		});
	}

	addCombatant(): void {
		this.combatants.push(this.createCombatantGroup());
	}

	removeCombatant(index: number): void {
		if (index >= 0 && index < this.combatants.length) {
			this.combatants.removeAt(index);
		}
	}

	onSubmit() {
		if (this.bracketForm.valid) {
			const formValue = this.bracketForm.value;
			console.log("Bracket Form Submitted:", formValue);
		} else {
			console.error("Bracket Form is invalid");
		}
	}
}
