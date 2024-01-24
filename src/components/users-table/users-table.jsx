import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const data = [
    { name: "John", email: "john@email.com", phone: "55 99999-9999"},
    { name: "Sara", email: "sara@email.com", phone: "55 88888-8888"},
]

export default function UsersTable() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //simple recommended way to define a column
                header: 'Name',
                muiTableHeadCellProps: { style: { color: 'green' } }, //custom props
                enableHiding: true, //disable a feature for this column
            },
            {
                accessorKey: 'email', //simple recommended way to define a column
                header: 'Email',
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'phone', //simple recommended way to define a column
                header: 'Phone',
                enableHiding: false, //disable a feature for this column
            }
        ]
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
        enableColumnOrdering: true,
        enableGlobalFilter: true
    })

  return (
        <MaterialReactTable table={table} />
  )
};