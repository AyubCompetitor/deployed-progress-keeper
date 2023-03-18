import { useState } from "react";
import TickIcon from "../TickIcon/TickIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import Modal from "../Modal/Modal";
import "./listItem.css";

const ListItem = ({ task }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<li className="list-item">
			<div className="info-container">
				<TickIcon />
				<p className="task-title">{task.title}</p>
				<ProgressBar />
			</div>

			<div className="buttons-container">
				<button className="edit" onClick={() => setShowModal(true)}>
					EDIT
				</button>
				<button className="delete-btn">DELETE</button>
			</div>
			{showModal && (
				<Modal mode={"edit"} setShowModal={setShowModal} task={task} />
			)}
		</li>
	);
};

export default ListItem;
