import Marquee from "./Marquee";
import NoResults from "./NoResults";
import MoviesList from "./MoviesList";

export const CurrentlyShowing = ({
	movieList,
	movieData,
	genreMap,
	setFavorites,
	favorites,
}) => {
	if (!movieList.length) return <NoResults />;
	const titles = movieData.results.map((movie) => movie.title);
	return (
		<>
			<Marquee titles={titles} />
			<MoviesList
				movieList={movieList}
				genreMap={genreMap}
				favorites={favorites}
				setFavorites={setFavorites}
			/>
		</>
	);
};
