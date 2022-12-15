import React, { createContext, FC, ReactNode, useState } from "react";

interface LangContextProps {
	lang: "es" | "en";
	setLang: (lang: "es" | "en") => void;
}

export const LangContext = createContext<LangContextProps>({
	setLang() {},
	lang: "es",
});

interface ContextProviderProps {
	children: ReactNode;
}

export const LangContextProvider: FC<ContextProviderProps> = ({ children }) => {
	const [lang, setLang] = useState<"es" | "en">("es");

	return (
		<LangContext.Provider
			value={{
				lang,
				setLang,
			}}
		>
			{children}
		</LangContext.Provider>
	);
};
