import DataTable from "../../components/DataTable/DataTable";
import { userColumns } from "../../utils";

const List = ({ data }) => {
	return (
		<div className="content-box">
			<DataTable columns={userColumns} data={data} key="key" />
		</div>
	);
};

export default List;
