import "./listHeader.css";

const ListHeader = ({ listItem }) => {
	const signOut = () => {
		console.log("sign out");
	};

	return (
		<div className="list-header">
			<h1>{listItem}</h1>
			<div className="buttons-container">
				<button className="create-button">ADD NEW</button>
				<button className="signout-button" onClick={signOut}>
					SIGN OUT
				</button>
			</div>
		</div>
	);
};

export default ListHeader;
