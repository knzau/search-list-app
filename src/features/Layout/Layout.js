import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import List from "../List/List";
import SearchSection from "../SearchSection/SearchSection";

import "./Layout.scss";
import { userData } from "../mockData";

const { Header, Sider } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [data, setData] = useState(userData);
	const [searchValue, setSearchValue] = useState("");
	const [searchFilter, setSearchFilter] = useState("");

	console.log({ searchFilter, searchValue, setSearchFilter, setSearchValue, setData });

	const handleSearchUser = (value) => {
		console.log(value);
		setSearchValue(value);
	};

	const handleSelectUserFilter = (value) => {
		console.log(value);
		setSearchFilter(value);
	};

	useEffect(() => {
		if (!searchValue.length) {
			return;
		}

		if (searchValue.length > 0) {
			// const searchData = userData.filter((searchItem) => {
			// 	// const lastIndex = userData.length - 1;
			// 	// console.log(Object.values(searchItem).slice(1, lastIndex).includes("jo"));

			// 	// Object.values(searchItem).slice(1, lastIndex).includes(`${searchValue.toLowerCase()}`);
			// 	// console.log({ searchValue });
			// 	// console.log(searchItem[searchFilter].toLowerCase().includes(searchValue));
			// 	searchItem[searchFilter]?.toLowerCase().includes(searchValue.toLowerCase());
			// });

			if (searchFilter !== "all") {
				const searchData = userData.filter((searchItem) =>
					searchItem[searchFilter]?.toLowerCase().includes(searchValue.toLowerCase())
				);
				console.log({ searchData });
				setData(searchData);
			} else {
				//todo: filter search by all
			}
		} else {
			setData(userData);
		}
	}, [searchFilter, searchValue]);

	return (
		<Layout className="layout-container">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo">Users List app</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "1",
							icon: <UserOutlined />,
							label: "Users",
						},
					]}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header className="header-box">
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: "trigger",
						onClick: () => setCollapsed(!collapsed),
					})}
					<h1 className="breadcrumb-title">Dashboard - Users</h1>
				</Header>
				<div className="app-content">
					<SearchSection
						handleSearchUser={handleSearchUser}
						handleSelectUserFilter={handleSelectUserFilter}
					/>
				</div>
				<div className="app-content">
					<List data={data} />
				</div>
			</Layout>
		</Layout>
	);
};
export default App;
