export const customStyles = {
	control: (provided) => ({
		...provided,
		border: "2px solid black",
		fontSize: "1rem",
		fontWeight: "400",
		padding: "5px",
		borderRadius: "0px",
		"&:hover": {
			border: "2px solid black",
		},
	}),
	menu: (provided) => ({
		...provided,
		border: "2px solid black",
		borderRadius: "0px",
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? "rgb(255, 108, 54)" : "white",
		":hover": {
			backgroundColor: "rgb(255, 108, 54)",
		},
	}),
	placeholder: (provided) => ({
		...provided,
		color: "black",
	}),
	container: (provided) => ({
		...provided,
		marginRight: "10px",
	}),
};