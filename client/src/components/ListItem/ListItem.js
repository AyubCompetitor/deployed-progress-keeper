import TickIcon from "../TickIcon/TickIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./listItem.css";

const ListItem = ({ task }) => {
	return (
		<li className="list-item">
			<div className="info-container">
				<TickIcon />
				<p className="task-title">{task.title}</p>
				<ProgressBar />
			</div>

			<div className="buttons-container">
				<button className="edit-btn">EDIT</button>
				<button className="delete-btn">DELETE</button>
			</div>
		</li>
	);
};

export default ListItem;
