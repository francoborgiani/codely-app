interface Link {
	to: string;
	title: string;
	path: string;
}

export interface Lang {
	title: string;
	navBarLinks: Link[];
}

export interface LangConfig {
	es: Lang;
	en: Lang;
}

export const lang: LangConfig = {
	es: {
		title: "BorgiDevDash_",
		navBarLinks: [
			{
				title: "About Me",
				to: "https://franborgiani.com/",
				path: "https://franborgiani.com/",
			},
		],
	},
	en: {
		title: "BorgiDevDash_",
		navBarLinks: [
			{
				title: "Sobre mí",
				to: "https://franborgiani.com/",
				path: "https://franborgiani.com/",
			},
		],
	},
};
