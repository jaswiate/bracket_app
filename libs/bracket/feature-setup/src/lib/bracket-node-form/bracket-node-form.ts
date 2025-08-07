import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	FormBuilder,
	FormGroup,
	FormArray,
	Validators,
	ReactiveFormsModule,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "lib-bracket-node-form",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./bracket-node-form.html",
	styleUrl: "./bracket-node-form.css",
})
export class BracketNodeForm {}
