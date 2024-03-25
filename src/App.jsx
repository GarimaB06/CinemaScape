/**
 * CHANGE 4 - Moved LoadingUI  & Error UI into their own component to be invoked here
 */

import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useFetchData } from "./utils/useFetchData";
import { CURRENTLY_PLAYING_URL, GENRE_URL, FAVORITES_URL } from "./apiKey";
import { CurrentlyShowing } from "./components/CurrentlyShowing";
import { normalizeGenreData } from "./utils/normalize";
import { filterMovies } from "./utils/filter";
import SearchBar from "./components/SearchBar";
import FilterBy from "./components/FilterBy";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "./App.scss";
import PageNumbers from "./components/PageNumbers";

function App() {
	const [searchText, setSearchText] = useState("");
	const [selectedGenresList, setSelectedGenresList] = useState([]);
	const [sortBy, setSortBy] = useState(null);
	const [favorites, setFavorites] = useState(new Set());
	const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const MOVIES_BY_SELECTED_PAGE = `${CURRENTLY_PLAYING_URL}&page=${currentPage}`;

	const {
		data: pageData,
		loading: pageLoading,
		error: pageError,
	} = useFetchData(MOVIES_BY_SELECTED_PAGE);

	const {
		data: movieData,
		loading: movieLoading,
		error: movieError,
	} = useFetchData(CURRENTLY_PLAYING_URL);

	const {
		data: genreData,
		loading: genreLoading,
		error: genreError,
	} = useFetchData(GENRE_URL);

	// const {
	// 	data: favoritesData,
	// 	loading: favoritesLoading,
	// 	error: favoritesError,
	// } = useFetchData(FAVORITES_URL, "POST", {
	// 	body: JSON.stringify({ id: 1072790 }),
	// });

	if (movieLoading || genreLoading || pageLoading) {
		return <Loading />;
	}

	if (movieError || genreError || pageError) {
		return <Error error={movieError || genreError || pageError} />;
	}
	/**
	 * Filter params is a way to pass multiple paramers/arguments into a function on it's invokation
	 * the object notation is used to make sure that the sequence of arguments isn't relevent while we're calling the filterMovies funtion
	 * and passing multiple arguments to it
	 * THIS IS CONSIDERED BEST PRACTICE WHEN THERE ARE 3 OR MORE ARGUMENTS
	 * This would be less of an issue if this was typescript as there's be an interface to warn you of such issues
	 */
	const filterParams = {
		searchText,
		sortBy,
		selectedGenresList,
		favorites,
		showFavoritesOnly,
	};

	const genreMap = normalizeGenreData(genreData);
	const movieList = filterMovies(pageData.results, filterParams);

	const toggleShowFavoritesOnly = () => {
		setShowFavoritesOnly(!showFavoritesOnly);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="acme-title">CINEMA SCAPE</h1>
				<Player
					autoplay
					loop
					src="https://lottie.host/2744de92-481b-4180-8ea7-c4419c5adde2/ViDLEKjMHz.json"
					className="popcorn"
					aria-label="Popcorn animation"
				></Player>
			</header>
			<main>
				<SearchBar
					searchText={searchText}
					setSearchText={setSearchText}
					aria-label="Search movies"
				/>
				<FilterBy
					genreMap={genreMap}
					setSelectedGenresList={setSelectedGenresList}
					// selectedGenresList={selectedGenresList}
					setSortBy={setSortBy}
					showFavoritesOnly={showFavoritesOnly}
					toggleShowFavoritesOnly={toggleShowFavoritesOnly}
				/>
				<CurrentlyShowing
					movieList={movieList}
					movieData={movieData}
					genreMap={genreMap}
					favorites={favorites}
					setFavorites={setFavorites}
				/>
			</main>
			<PageNumbers
				totalPages={movieData.total_pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default App;
