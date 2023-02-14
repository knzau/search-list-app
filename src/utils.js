import { Tag } from "antd";

export const findMatch = (pattern, entry, searchFilter) => {
  if (searchFilter) {
    return pattern.test(String(entry[searchFilter]));
  }
  return pattern.test(Object.values(entry).join(", "));
 
}

export const userFilterOptions = [
	{
		value: "email",
		label: "Email",
	},
	{
		value: "firstName",
		label: "First Name",
	},
	{
		value: "lastName",
		label: "Last Name",
	},
	{
		value: "primaryGroup",
		label: "Primary Group",
	},
	{
		value: "phoneNumber",
		label: "Phone Number",
	},
	{
		value: "hours",
		label: "Hours Studied",
	},
];

export const userColumns = [
	{
		title: "Email",
		dataIndex: "email",
		key: "email",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "First Name",
		dataIndex: "firstName",
		key: "firstName",
	},
	{
		title: "Last Name",
		dataIndex: "lastName",
		key: "lastName",
	},
	{
		title: "Groups",
		key: "groups",
		dataIndex: "groups",
		render: (_, { groups }) => (
			<>
				{groups.map((tag) => {
					let color = "";
					if (tag === "primary") {
						color = "volcano";
					} else {
						color = "geekblue";
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
	},
	{
		title: "Phone Number",
		dataIndex: "phoneNumber",
		key: "phoneNumber",
	},
	{
		title: "Hours Studied",
		dataIndex: "hoursStudied",
		key: "hoursStudied",
	},
];
