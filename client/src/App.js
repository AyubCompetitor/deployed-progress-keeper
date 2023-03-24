import { useEffect, useState } from "react";
import ListHeader from "./components/listHeader/ListHeader";
import ListItem from "./components/ListItem/ListItem";

const App = () => {
	const userEmail = "test@test.com";
	const [tasks, setTasks] = useState(null);

	useEffect(() => {
		getData();
	}, []);

	console.log(tasks);

	const getData = async () => {
		try {
			const req = await fetch(`http://localhost:8000/todos/${userEmail}`);
			const res = await req.json();
			setTasks(res);
		} catch (err) {
			console.error(err);
		}
	};

	const sortedTasks = tasks?.sort(
		(first, second) => new Date(first.date) - new Date(second.date)
	);

	return (
		<div className="app">
			<ListHeader listItem={"ok lets go"} getData={getData} />
			{sortedTasks?.map((task) => (
				<ListItem key={task.id} task={task} getData={getData} />
			))}
		</div>
	);
};

export default App;
