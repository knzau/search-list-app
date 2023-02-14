import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, CloudServerOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import List from "../List/List";
import SearchSection from "../SearchSection/SearchSection";
import { userData } from "../../mockData";
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

	//callback when you click on the search-icon, the clear-icon or press the Enter key
	const handleSelectUserFilter = (value) => {
		setSearchFilter(value);
	};

	const { filteredData, handleSearchChange } = useFilterData(searchFilter, searchValue, userData);

	return (
		<Layout className="layout-container">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo">
					<CloudServerOutlined style={{ color: "white", fontSize: 24 }} /> <span>Rise Admin Panel</span>
				</div>
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
						handleSearchChange={handleSearchChange}
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
