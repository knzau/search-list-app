import { Select } from "antd";
import "./SelectDropDown.scss";

const SelectDropDown = ({ onChange, placeholder, options, size, ...rest }) => {
	return (
		<Select
			showSearch
			placeholder={placeholder}
			optionFilterProp="children"
			onChange={onChange}
			options={options}
			size={size}
			className="select-dropdown"
			{...rest}
		/>
	);
};

export default SelectDropDown;
