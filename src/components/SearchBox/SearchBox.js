import { Input } from "antd";
import "./SearchBox.scss";

const { Search } = Input;
const SearchBox = ({ onSearch, placeholder = "", allowClear, enterButtonLabel = "", size, className = "" }) => {
	return (
		<Search
			placeholder={placeholder}
			allowClear={allowClear}
			enterButton={enterButtonLabel}
			size={size}
			onSearch={onSearch}
			className={className}
		/>
	);
};

export default SearchBox;
