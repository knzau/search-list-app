import SearchBox from "../../components/SearchBox/SearchBox";
import SelectDropDown from "../../components/SelectDropDown/SelectDropDown";
import { userFilterOptions } from "../../utils";

import "./SearchSection.scss";

const SearchSection = ({ handleSearchUser, handleSelectUserFilter }) => {
	return (
		<div className="content-box search-area">
			<div className="search-area_item">
				<label>Search filter</label>
				<SelectDropDown
					placeholder="Select a filter"
					onChange={handleSelectUserFilter}
					options={userFilterOptions}
					size="large"
				/>
			</div>
			<div className="search-area_item">
				<label>What are you looking for?</label>
				<SearchBox
					onSearch={handleSearchUser}
					placeholder="Search for users"
					allowClear={true}
					enterButtonLabel="Search"
					size="large"
					className="search-box"
				/>
			</div>
		</div>
	);
};

export default SearchSection;
