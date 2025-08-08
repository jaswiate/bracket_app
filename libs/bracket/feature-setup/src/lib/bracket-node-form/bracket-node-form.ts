import { Component, inject, OnInit, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	FormBuilder,
	FormGroup,
	Validators,
	ReactiveFormsModule,
} from "@angular/forms";
import { BracketNode } from "@bracket-app/data-access";
import { MatInputModule } from "@angular/material/input";

@Component({
	selector: "lib-bracket-node-form",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatInputModule],
	templateUrl: "./bracket-node-form.html",
	styleUrl: "./bracket-node-form.css",
})
export class BracketNodeForm implements OnInit {
	formSubmitted = output<BracketNode>();
	formClosed = output<void>();

	private fb = inject(FormBuilder);
	nodeForm!: FormGroup;

	ngOnInit(): void {
		this.nodeForm = this.fb.group({
			title: ["", Validators.required],
		});
	}

	save(): void {
		if (this.nodeForm.valid) {
			this.formSubmitted.emit({
				...this.nodeForm.value,
			});
		}
	}

	cancel(): void {
		this.formClosed.emit();
	}
}
