/**
 * CHANGE #5: Imported a re-usable Button component that accepts props and can be used as the close-button & buy-tickets-button
 * Aria label for the close button is more descriptive
 */
// import { ReactComponent as CloseLogo } from "../assets/close.svg";
// import { ReactComponent as StarLogo } from "../assets/star.svg";

// import CloseLogo from "../assets/close.svg";
// import StarLogo from "../assets/star.svg";
// import Button from "./Button";

import CloseLogo from "../assets/CloseLogo";
import StarLogo from "../assets/StarLogo";
import Button from "./Button";

const FlipCardBack = ({ movie, flipped, setFlipped, genreMap }) => {
	// When card is not flipped, we don't want the buttons on this side to be tabbable.
	const tabIndex = flipped ? 0 : -1;
	return (
		<div className="flip-card-back-info" aria-label="Movie Details">
			<Button
				className="close-button"
				onClick={() => setFlipped(false)}
				tabIndex={tabIndex}
				ariaLabel="close button to flip to the font side of the movie card"
			>
				<CloseLogo />
			</Button>

			<div className="title-rating-genre">
				<div aria-label="movie title and release date">
					<div className="movie-title-wrapper">
						<div
							className="movie-title"
							aria-label={`full movie title ${movie.title}`}
						>
							{movie.title}
						</div>
						{movie.title.length > 20 && (
							<span className="full-movie-title">{movie.title}</span>
						)}
					</div>
					<span>{` (${movie.release_date.split("-")[0]})`}</span>
				</div>
				<div className="rating-and-icon">
					<span className="rating" aria-label="movie rating">
						{movie.vote_average}
					</span>
					<span aria-hidden="true">
						<StarLogo />
					</span>
				</div>
				<div className="genre-display" aria-label="movie genres">
					{movie.genre_ids.slice(0, 3).map((genreId, index) => (
						<span key={`${index}-${genreId}`} className="genre">
							{genreMap[genreId]}
						</span>
					))}
				</div>
			</div>
			<div className="overview" tabIndex={tabIndex} aria-label="movie overview">
				<p>{movie.overview}</p>
			</div>
			<Button
				className="buy-tickets"
				tabIndex={tabIndex}
				ariaLabel="Buy Tickets"
				label="Buy Tickets"
			/>
		</div>
	);
};

export default FlipCardBack;
