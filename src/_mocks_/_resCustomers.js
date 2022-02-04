export const _resCustomers = () => {
    return [
        {
            key: 1,
            name: "Dimitris",
            lastName: "Eleftheriou",
            age: 27,
            actions: ["History", "Delete", "Schedule"],
            tags: ["nice", "developer"],
            appointments: [
                {
                    key: 1,
                    date: "2022-12-24 16:12:00",
                    type: "Athletic Massage",
                    actions: ["re-schedule"]
                }
            ]
        },
        {
            key: 2,
            name: "Jim",
            lastName: "Green",
            age: 42,
            actions: ["History", "Delete", "Schedule"],
            tags: ["loser"],
        },
        {
            key: 3,
            name: "Joe",
            lastName: "Black",
            age: 32,
            actions: ["History", "Delete", "Schedule"],
            tags: ["cool", "teacher"],
        },
        {
            key: 4,
            name: "Marios",
            lastName: "Con/nou",
            age: 28,
            actions: ["History", "Delete", "Schedule"],
            tags: ["cool", "teacher"],
        },
        {
            key: 5,
            name: "Stelios",
            lastName: "Antoniades",
            age: 27,
            actions: ["History", "Delete", "Schedule"],
            tags: ["cool", "teacher"],
        },
    ];
}

export const _resCustomerTableHeaders = () => {
    return {
        colHeaders: [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Lastname",
                dataIndex: "lastName",
                key: "lastname",
            },
            {
                title: "Actions",
                dataIndex: "actions",
                key: "actions",
            },
            {
                title: "Telephone",
                dataIndex: "telephone",
                key: "telephone",
            },
        ],
        subHeaders: [
            {
                title: "Date",
                dataIndex: "date",
                key: "date"
            },
            {
                title: "Type",
                dataIndex: "type",
                key: "type"
            },
            {
                title: "Actions",
                dataIndex: "actions",
                key: "actions"
            }
        ]
    }
}
