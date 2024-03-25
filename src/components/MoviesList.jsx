/**
 * CHANGE # 1 - Created this file labeled MoviesList
 * Moved the code from CurrentlyShowing to have more single responsibility and scalable
 * Moved the mapping of movieList which is invoking FlipCardParent component
 * Moved the toggleFavorite method as it needs to live in the same component as the component that's triggering the event
 * Moved checkIsFavorited method as it needs to live in the same component where it's being called
 */

import FlipCardParent from "./FlipCardParent";
const MoviesList = ({ movieList, genreMap, favorites, setFavorites }) => {
	const toggleFavorite = (movieId) => {
		const newSet = new Set([...favorites]);
		if (newSet.has(movieId)) {
			newSet.delete(movieId);
		} else {
			newSet.add(movieId);
		}
		setFavorites(newSet);
	};

	const checkIsFavorited = (movieId) => {
		return favorites.has(movieId);
	};

	return (
		<div className="movie-list" aria-label="Currently Showing Movies">
			{movieList.map((movie, index) => (
				<FlipCardParent
					movie={movie}
					index={index}
					genreMap={genreMap}
					key={`${movie.id}-${index}`}
					aria-label={`${movie.title} card`}
					toggleFavorite={() => toggleFavorite(movie.id)}
					isFavorited={checkIsFavorited(movie.id)}
				/>
			))}
		</div>
	);
};

export default MoviesList;
