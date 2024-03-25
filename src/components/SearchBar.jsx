/**
 * SEARCH BUTTON ON SUBMIT IMPLEMENTATION WITH useRef
 * useRef allows your to persist values between re renders
 * You can use it to directly access the DOM elements
 * It can be used to store a mutable value that does not cause re-renders when updated
 * We are using .current.value to access the current value and is a commonly used pattern in form handling
 */

import { useRef } from "react";
const SearchBar = ({ setSearchText }) => {
	const inputRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const searchTerm = inputRef.current.value;
		setSearchText(searchTerm);
	};
	return (
		<>
			<form
				className="search-bar-container"
				onSubmit={handleSubmit}
				aria-label="Search movies"
			>
				<input
					className="search-input"
					ref={inputRef}
					aria-label="Search term"
					placeholder="Search by movie title"
				/>
				<button className="search-button" aria-label="Submit search">
					Search
				</button>
			</form>
		</>
	);
};

export default SearchBar;

/**
 * DEBOUNCING IMPLEMENTATION
 */
// import { useEffect, useState } from "react";
// import useDebounce from "../utils/useDebounce";
// const SearchBar = ({ setSearchText }) => {
// 	const [inputVal, setInputVal] = useState("");
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};
// 	const debouncedValue = useDebounce(inputVal);
// 	useEffect(() => {
// 		setSearchText(debouncedValue);
// 	}, [debouncedValue, setSearchText]);

// 	return (
// 		<>
// 			<form
// 				className="search-bar-container"
// 				onSubmit={handleSubmit}
// 				aria-label="Search movies"
// 			>
// 				<input
// 					className="search-input"
// 					aria-label="Search term"
// 					placeholder="Search by movie title"
// 					onChange={(e) => setInputVal(e.target.value)}
// 				/>
// 			</form>
// 		</>
// 	);
// };

// export default SearchBar;
