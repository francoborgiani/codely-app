import { LangContextProvider } from "./contexts/LangContext";
import { Dashboard } from "./sections/dashboard/Dashboard";

export function App() {
	return (
		<LangContextProvider>
			<Dashboard />
		</LangContextProvider>
	);
}
