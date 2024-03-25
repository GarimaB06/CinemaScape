import { useState, useEffect } from "react";

// export const useFetchData = (URL) => {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch(URL);
// 				if (!response.ok) {
// 					throw new Error(`HTTP error! Status: ${response.status}`);
// 				}
// 				const jsonData = await response.json();
// 				setData(jsonData);
// 				setLoading(false);
// 			} catch (err) {
// 				console.log(`Error ${err} occurred while fetching data from URL`);
// 				setError(err);
// 				setLoading(false);
// 			}
// 		};
// 		fetchData();
// 	}, [URL]);

// 	return { data, loading, error };
// };

export const useFetchData = (URL, method = "GET", options = {}) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URL, {
					method: method,
					...options,
				});
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const jsonData = await response.json();
				setData(jsonData);
				setLoading(false);
			} catch (err) {
				console.log(`Error ${err} occurred while fetching data from URL`);
				setError(err);
				setLoading(false);
			}
		};
		fetchData();
	}, [URL, method, options]);

	return { data, loading, error };
};
