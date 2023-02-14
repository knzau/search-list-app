import { Table } from "antd";

const DataTable = ({ columns, data, ...rest }) => {
	return <Table columns={columns} dataSource={data} {...rest} />;
};

export default DataTable;
