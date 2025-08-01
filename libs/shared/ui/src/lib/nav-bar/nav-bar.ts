import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "lib-nav-bar",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./nav-bar.html",
	styleUrl: "./nav-bar.css",
})
export class NavBar {}
