const NoResults = () => {
	return (
		<div className="no-results" aria-live="polite" role="status">
			<p>No movies found. Try searching a different name.</p>
		</div>
	);
};

export default NoResults;
