/**
 * This Helper function makes sure that all of the sorting and filter functions are encapsulated together 
 *  and user sorting and filtering actions are being factored in
 *  to keep track of the state of the movieList updated with each filter/sorting function
*/
export const filterMovies = (movieList, filterParams) => {
    const {searchText, sortBy, selectedGenresList, favorites, showFavoritesOnly} = filterParams

    let filteredMovieList = filterBySearch(movieList, searchText );
    filteredMovieList = sortMovies(filteredMovieList, sortBy);
    filteredMovieList = filterByGenre(filteredMovieList,
    	selectedGenresList,
    );
    filteredMovieList = filterByFavorites(filteredMovieList, favorites, showFavoritesOnly,)
    return filteredMovieList
}

/**
 * This method checks to see if the showFavoritesOnly state has been toggled on or off
 * if it's off we just return the movieList
 * else we filter the movieList by looking into the favorites set 
 * check if it has the movie id stored in the favorites set
 * We only return the movies in the movieList that exist in the favorites set
*/
const filterByFavorites = (movieList, favorites, showFavoritesOnly) => {
 if( !showFavoritesOnly) return movieList
 return movieList.filter(movie => {
    return favorites.has(movie.id)
 })
}
/**
 * This method takes the user-inputted searchText and movieList.
 * It ensures that it converts both the searchText and movieTitle to lowercase for case-insensitive comparison.
 * Uses the String.prototype.indexOf method to determine if the searchText exists within the movieTitle.
 * If the searchText is not found, the indexOf method returns -1.
 * This approach is optimal for comparison because we only need to check if the result is not -1 to confirm the searchText's presence in the movieTitle.
 */

const filterBySearch = (movieList = [], searchText = "") => {
    if(searchText === "") return movieList
    const searchTextLowerCased = searchText.toLowerCase()
    return movieList.filter(movie => {
        const movieTitleLowerCased = movie.title.toLowerCase()
        return movieTitleLowerCased.indexOf(searchTextLowerCased) !== -1
  })
}

/**
 * This method, sortMovies, takes two parameters: movieList, which is an array of movies, and sortBy, an object containing sorting criteria.
 * The sortBy object consists of two properties: key, representing the attribute to sort by (e.g., 'vote_average'), and ascending, a boolean indicating whether to sort in ascending or descending order.
 * Within the method, it first checks if sortBy is falsy, in which case it returns the original movieList without sorting.
 * Otherwise, it extracts the key and ascending values from sortBy.
 * It then uses the array.sort() method to sort the movieList array based on the specified key and ascending order.
 * If ascending is true, it sorts the array in ascending order; otherwise, it sorts it in descending order.
 * Finally, it returns the sorted movieList array.
 */

export const sortMovies = (movieList, sortBy) => {
    if(!sortBy) return movieList 
    else {
        const {key, ascending} = sortBy
        return movieList.sort((a, b) => {
            const sortTermA = a[key]
            const sortTermB = b[key] 
            if(ascending) return sortTermA - sortTermB 
            return sortTermB - sortTermA
        })
    }
};

/**
 * This method first coerces the array of genre ids from string to number types
 * It then checks if the selectedGenresList is empty. If it is, the original movieList is returned as is.
 * Otherwise, it filters the movieList by examining each movie's genre_ids array.
 * For each movie, it iterates over its genre_ids. If any of the genre ids match those selected by the user, it returns true.
 * This boolean value determines whether the movie should be included in the filtered movieList.
 * The method effectively filters the movieList based on genre ids selected by the user.
 */
const filterByGenre = (movieList, selectedGenresList) => {
    const selectedGenresIds = selectedGenresList.map(genre => Number(genre.value))
    if(!selectedGenresList.length) return movieList
    return movieList.filter(movie => {
        const {genre_ids} = movie 
        for(let id of genre_ids) {
            if(selectedGenresIds.includes(id)) return true
        }
        return false
    })
}
