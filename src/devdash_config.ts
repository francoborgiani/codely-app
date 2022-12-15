export interface DashboardWidget {
	id: string;
	repositoryUrl: string;
}

export interface DevDashConfig {
	github_access_token: string;
	widgets: DashboardWidget[];
}

export const devdashConfig: DevDashConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "1",
			repositoryUrl: "https://github.com/francoborgiani/dark-portfolio-next",
		},
		{
			id: "2",
			repositoryUrl: "https://github.com/francoborgiani/auth-system",
		},
		{
			id: "3",
			repositoryUrl: "https://github.com/francoborgiani/blog",
		},
	],
};
