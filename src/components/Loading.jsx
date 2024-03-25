/**
 * CHANGE 2 - Moved LoadingUI into it's own component to be in different parts of the app
 */
const LoadingUI = () => {
	return (
		<div aria-live="polite" role="status">
			Loading...
		</div>
	);
};

export default LoadingUI;
