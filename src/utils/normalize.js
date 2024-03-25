export const normalizeGenreData = (genreData = {}) => {
    const genreObj = {} 
    for(let genre of genreData.genres) {
        genreObj[genre.id] = genre.name
    }
    return genreObj
}