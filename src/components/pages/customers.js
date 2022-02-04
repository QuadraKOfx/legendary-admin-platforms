import LegendaryAntdTable from "../widgets/customers/table";
import * as React from "react";
import {_resCustomers, _resCustomerTableHeaders} from "../../_mocks_/_resCustomers";

function fetchTableData() {
    const data = _resCustomers();
    const columns = _resCustomerTableHeaders();
    return {data: data, colPrimary: columns.colHeaders, colSubHeaders: columns.subHeaders};
}

function CustomersPage() {

    const data = fetchTableData();

    return (
        <LegendaryAntdTable data={data} />
    );

}

export default CustomersPage;

