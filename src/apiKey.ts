import { Buffer } from "buffer";

const API_KEY = "ZjFkODFjMDQ5NTU5MGYxNzRjNTFmZmE5ODIzZWQyNWY=";

const decodedApiKey = () => {
	let bufferObj = Buffer.from(API_KEY, "base64");
	let decodedString = bufferObj.toString("utf8");
	return decodedString;
};

const apiKey = decodedApiKey();

export const CURRENTLY_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}`;
export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${apiKey}`;
export const FAVORITES_URL = `https://api.themoviedb.org/3/account/21027160/favorite?api_key=${apiKey}`;
