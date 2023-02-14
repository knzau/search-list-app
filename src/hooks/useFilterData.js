import { useEffect, useState } from "react";
import { findMatch } from "../utils";

const useFilterData = (searchFilter, searchValue, userData) => {
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (!searchValue?.length) {
			setFilteredData(userData);
		}
		const pattern = new RegExp(`${searchValue}`, "i");

		const searchData = userData.filter((entry) => findMatch(pattern, entry, searchFilter));

		setFilteredData(searchData);
	}, [searchFilter, searchValue, userData]);

	return { filteredData };
};

export default useFilterData;
