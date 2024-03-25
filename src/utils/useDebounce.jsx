import { useEffect, useState } from "react";

// /**
//  * This custom hook is used for debouncing - Delay the updating of a certain value by a certain amount of time
//  */
const useDebounce = (value, delay = 1000) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(timeOut);
	}, [value]);
	return debouncedValue;
};

export default useDebounce;
