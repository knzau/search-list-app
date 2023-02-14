import React, { useState, useCallback } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import List from "../List/List";
import SearchSection from "../SearchSection/SearchSection";
import { userData } from "../mockData";
import useFilterData from "../../hooks/useFilterData";

import "./Layout.scss";

const { Header, Sider } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = useState(false);

	const [searchValue, setSearchValue] = useState("");
	const [searchFilter, setSearchFilter] = useState("");

	const handleSearchUser = (value) => {
		setSearchValue(value);
	};

	const handleSelectUserFilter = useCallback(
		(value) => {
			setSearchFilter(value);
		},
		[setSearchFilter]
	);

	const { filteredData } = useFilterData(searchFilter, searchValue, userData);

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
					<List data={filteredData} />
				</div>
			</Layout>
		</Layout>
	);
};
export default App;
