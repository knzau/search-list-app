import { useCallback, useEffect, useState } from "react";
import { findMatch } from "../utils";

const useFilterData = (searchFilter, searchValue, userData) => {
	const [filteredData, setFilteredData] = useState([]);

	//callback when user input changes
	const handleSearchChange = useCallback(
		(e) => {
			if (e.target.value === "") {
				setFilteredData(userData);
			}
		},
		[userData]
	);

	useEffect(() => {
		if (searchValue?.length === 0) {
			setFilteredData(userData);
		}
		const pattern = new RegExp(`${searchValue}`, "i");

		const searchData = userData.filter((entry) => findMatch(pattern, entry, searchFilter));

		setFilteredData(searchData);
	}, [searchFilter, searchValue, userData]);

	return { filteredData, handleSearchChange };
};

export default useFilterData;
