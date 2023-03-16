import { useState } from "react";
import Modal from "../Modal/Modal";
import "./listHeader.css";

const ListHeader = ({ listName }) => {
	const [showModal, setShowModal] = useState(false);

	const signOut = () => {
		console.log("sign out");
	};

	return (
		<div className="list-header">
			<h1>{listName}</h1>
			<div className="buttons-container">
				<button
					className="create-button"
					onClick={() => setShowModal(true)}
				>
					ADD NEW
				</button>
				<button className="signout-button" onClick={signOut}>
					SIGN OUT
				</button>
			</div>
			{showModal && <Modal mode={"create"} setShowModal={setShowModal} />}
		</div>
	);
};

export default ListHeader;
