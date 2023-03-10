import { useEffect } from "react";
import ListHeader from "./components/listHeader/ListHeader";

const App = () => {
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const userEmail = "test@test.com";
		try {
			const req = await fetch(`http://localhost:8000/todos/${userEmail}`);
			const res = await req.json();
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="app">
			<ListHeader listItem={"ok lets go"} />
		</div>
	);
};

export default App;
