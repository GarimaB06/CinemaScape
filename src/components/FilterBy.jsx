import Select from "react-select";
import FavoriteIcon from "../assets/FavoriteIcon";
import FilledFavoriteIcon from "../assets/FilledFavoriteIcon";
import { customStyles } from "../utils/customStyles";
import Button from "./Button";

const FilterBy = ({
	genreMap,
	setSelectedGenresList,
	setSortBy,
	showFavoritesOnly,
	toggleShowFavoritesOnly,
}) => {
	/**
	 * This line of code utilizes various methods such as Object.entries, .map(), .sort(), and localeCompare
	 * on the genreMap object to transform it into a sorted array of objects, formatted for the React Select library dropdown.
	 * Firstly, Object.entries is used to convert genreMap into a 2D array where each inner array contains an id and its corresponding genre --> [[id, genre], [id, genre]]
	 * The .map() method iterates over this 2D array, replacing each inner array with objects having 'value' as id and 'label' as genre.
	 * Consequently, we get an array of objects in the format: [{value: id, label: genre}, {value: id, label: genre}, ...].
	 * Finally, the .sort() method is applied to sort the array alphabetically based on the 'label' property using localeCompare.
	 */

	const genreOptions = Object.entries(genreMap)
		.map(([id, genre]) => ({
			value: id,
			label: genre,
		}))
		.sort((a, d) => a.label.localeCompare(d.label));

	/** REFACTORING TIP - Get rid of the .map
	 * This function takes all the selected genre options and sets them in selectedGenresList state living in the App component useState
	 * This can be refactored to just pass the selectedOptions in the setSelectedGenresList(selectedOptions)
	 * Not sure why we mapped it
	 */

	/**
	 * In the React Select Library, selectedOptions can be likened to an event (e) in React synthetic events.
	 * It represents the value passed through the onChange event handler from the selected option.
	 * This handleChange function is triggered when the selection changes.
	 * It takes the selectedOptions parameter, which contains the updated selection,
	 * and sets it as the new state for the selectedGenresList using setSelectedGenresList.
	 * Since this select element isMulti, selectedOptions is an array of selected options
	 */

	const handleChange = (selectedOptions) => {
		setSelectedGenresList(selectedOptions);
	};

	//React-Select library's syntax for declaring 'options' attribute in your Select component code and you can assign SortOptions as a value for it
	const sortOptions = [
		{ value: { key: "vote_average", ascending: true }, label: "Low to High" },
		{ value: { key: "vote_average", ascending: false }, label: "High to Low" },
	];

	return (
		<form className="filter-by" aria-label="Movie filtering and sorting form">
			<Select
				options={sortOptions}
				defaultValue={null}
				onChange={(sortOption) => setSortBy(sortOption.value)}
				placeholder="Sort by Rating"
				styles={customStyles}
				aria-label="Sort by Rating"
			/>
			{/* REFACTORING TIP: The value prop in this select might not be needed to show the state of what is selected */}
			<Select
				options={genreOptions}
				isMulti
				onChange={handleChange}
				placeholder="Filter by Genre"
				styles={customStyles}
				aria-label="Filter by Genre"
			/>
			<Button type="button" onClick={toggleShowFavoritesOnly}>
				{showFavoritesOnly ? (
					<FilledFavoriteIcon ariaLabel={"filtering by favorites"} />
				) : (
					<FavoriteIcon
						className="favorite-icon"
						ariaLabel="not filtering by favorites"
					/>
				)}
			</Button>
		</form>
	);
};

export default FilterBy;
