import { useState } from "react";
import "./modal.css";

const Modal = ({ mode, setShowModal }) => {
	const editMode = mode === "edit" ? true : false;
	const [data, setData] = useState({
		user_email: "",
		title: "",
		progress: "",
		date: editMode ? "" : new Date(),
	});
	const handleChange = (e) => {
		const { name, value } = e.target;

		setData((data) => ({
			...data,
			[name]: value,
		}));

		console.log(data);
	};

	return (
		<div className="overlay">
			<div className="modal">
				<div className="form-title-container">
					<h3>Lets {mode} your task</h3>
					<button onClick={() => setShowModal()}>X</button>
				</div>
				<form>
					<input
						required
						maxLength={30}
						placeholder=" Your task goes here"
						name="title"
						value={data.title}
						onChange={handleChange}
					/>

					<label htmlFor="range">
						Drag to select your current progress
					</label>
					<input
						required
						type="range"
						id="range"
						min="0"
						max="100"
						name="progress"
						value={data.progress}
						onChange={handleChange}
					/>
					<input
						className={mode}
						type="submit"
						// onClick={editMode ? editData : postData}
					/>
				</form>
			</div>
		</div>
	);
};

export default Modal;
