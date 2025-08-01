import { Route } from "@angular/router";

export const appRoutes: Route[] = [
	{
		path: "create",
		loadComponent: () =>
			import("@bracket-app/feature-setup").then((m) => m.BracketForm),
	},
	{
		path: "vote/:id",
		loadComponent: () =>
			import("@bracket-app/feature-vote").then((m) => m.BracketView),
	},
];
