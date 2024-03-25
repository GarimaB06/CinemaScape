/**
 * CHANGE 3 - Moved ErrorUI into it's own component to be in different parts of the app
 */
const ErrorUI = ({ error }) => {
	return (
		<div aria-label="error occured" aria-live="assertive" role="alert">
			Error: {error}
		</div>
	);
};

export default ErrorUI;
