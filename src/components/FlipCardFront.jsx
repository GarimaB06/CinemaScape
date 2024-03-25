/**
 * CHANGE 6: Imported a re-usable Button component that accepts props and can be used as the see-info-button & add-remove-to-favorite-button
 * Aria label for the close button is more descriptive
 */
// import { ReactComponent as InfoIcon } from "../assets/info.svg";
// import { ReactComponent as FavoriteIcon } from "../assets/favorite.svg";
// import { ReactComponent as FilledFavoriteIcon } from "../assets/filled_favorite.svg";

// import InfoIcon from "../assets/info.svg";
// import FavoriteIcon from "../assets/favorite.svg";
// import FilledFavoriteIcon from "../assets/filled_favorite.svg";

import InfoIcon from "../assets/InfoIcon";
import FavoriteIcon from "../assets/FavoriteIcon";
import FilledFavoriteIcon from "../assets/FilledFavoriteIcon";
import Button from "./Button";

const FlipCardFront = ({
	movie,
	flipped,
	setFlipped,
	isFavorited,
	toggleFavorite,
}) => {
	// When card is flipped, we don't want the buttons on this side to be tabbable.
	const tabIndex = flipped ? -1 : 0;
	return (
		<div
			className="flip-card-front"
			aria-label="movie poster image and action buttons"
		>
			<img
				src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
				alt={`${movie.title} poster`}
				className="movie-poster"
			/>
			<div className="info-and-favorite-button">
				<Button
					onClick={() => setFlipped(true)}
					tabIndex={tabIndex}
					aria-label="see more info button"
					children={<InfoIcon class-name="info-icon" />}
				/>
				<Button
					tabIndex={tabIndex}
					onClick={toggleFavorite}
					ariaLabel="add or remove to favorites button"
				>
					{isFavorited ? (
						<FilledFavoriteIcon aria-label="added to favorites" />
					) : (
						<FavoriteIcon
							className="favorite-icon"
							aria-label="not added to favorites"
						/>
					)}
				</Button>
			</div>
		</div>
	);
};

export default FlipCardFront;
