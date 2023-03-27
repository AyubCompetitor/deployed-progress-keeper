import { useState } from "react";
import TickIcon from "../TickIcon/TickIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import Modal from "../Modal/Modal";
import "./listItem.css";

const ListItem = ({ task, getData }) => {
	const [showModal, setShowModal] = useState(false);

	const deletePost = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,
				{
					method: "DELETE",
				}
			);
			if (response.status === 200) {
				getData();
			}
		} catch (err) {
			console.error(err);
		}
	};

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
				<button className="delete-btn" onClick={deletePost}>
					DELETE
				</button>
			</div>
			{showModal && (
				<Modal
					mode={"edit"}
					setShowModal={setShowModal}
					task={task}
					getData={getData}
				/>
			)}
		</li>
	);
};

export default ListItem;
