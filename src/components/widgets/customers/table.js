import * as React from "react";
import {Table, Tag, Space, Pagination, Button} from "antd";

const {Column} = Table;

function setUpActions() {
    return (
        <Space size="small">
            <a>Re-schedule</a>
        </Space>
    );
}

const setUpAppointments = (record, index) => {
    const _data = [];
    const _pLength = (record) ? record.length : -1;
    if (_pLength !== -1) {
        for (let i = 0; i < _pLength; i++) {
            if (record[i]) {
                _data.push({
                    key: record[i].key,
                    date: record[i].date,
                    type: record[i].type,
                    actions: setUpActions()
                })
            }
        }
    }
    return _data;
}

const appointmentsExpanded = (record, index, columns) => {
    const appointments = setUpAppointments(record.appointments, index);
    // todo limit pageSize for appointments
    return <Table size="small" columns={columns} dataSource={appointments} pagination={false}/>;
}

function LegendaryAntdTable({data}) {

    const tableState = {
        top: "topLeft",
        bottom: "bottomRight"
    }

    return (
        <>
            <Button type="primary">Add Customer</Button>
            <Table dataSource={data.data}
                   style={{marginTop: 2 + "rem"}}
                   expandedRowRender={(record, i) => appointmentsExpanded(record, i, data.colSubHeaders)}
                   pagination={{position: [tableState.top], pageSize: 5}}>

                <Column title="First Name" dataIndex="name" key="name"/>
                <Column title="Last Name" dataIndex="lastName" key="lastName"/>
                <Column title="Telephone" dataIndex="telephone" key="telephone"/>

                <Column
                    dataIndex="actions"
                    key="actions"
                    title="Actions"
                    render={(actions) => (
                        <div className="actions-wrapper">
                            {actions.map((action) => (
                                <Tag className="actions-tag" color="blue" key={action}>{action}</Tag>
                            ))}
                        </div>
                    )}>
                </Column>

            </Table>
        </>

    );

}

export default LegendaryAntdTable;
