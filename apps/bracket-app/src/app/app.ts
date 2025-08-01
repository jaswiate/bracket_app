import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddBracketButton, NavBar } from "@bracket-app/ui";

@Component({
	imports: [RouterModule, NavBar, AddBracketButton],
	selector: "app-root",
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected title = "bracket-app";
}
