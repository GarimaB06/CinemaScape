import FlipCardFront from "./FlipCardFront";
import FlipCardBack from "./FlipCardBack";
import { useState } from "react";

const FlipCardParent = ({
	movie,
	index,
	genreMap,
	isFavorited,
	toggleFavorite,
}) => {
	const [flipped, setFlipped] = useState(false);
	return (
		<div
			className={`flip-card${flipped ? " flipped" : ""}`}
			key={`${movie.id}-${index}`}
			aria-label="two sided card that holds movie poster and details"
		>
			<div className="flip-card-inner">
				<FlipCardFront
					movie={movie}
					setFlipped={setFlipped}
					flipped={flipped}
					isFavorited={isFavorited}
					toggleFavorite={toggleFavorite}
					aria-label="front of the movie card"
				/>
				<FlipCardBack
					movie={movie}
					setFlipped={setFlipped}
					flipped={flipped}
					genreMap={genreMap}
					aria-label="back of the movie card"
				/>
			</div>
		</div>
	);
};

export default FlipCardParent;
