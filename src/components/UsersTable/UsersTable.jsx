import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const UsersTable = ({ userData }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (userData)
            handleNewUserData(userData);

    }, [userData]);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //simple recommended way to define a column
                header: 'Name',
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
    });

    const handleNewUserData = (newUserData) => {
        data.filter(f => f.name !== newUserData.name && f.email !== newUserData.email);
        const uniqueSet = new Set([...data, ...newUserData]);
        const unionUserData = Array.from(uniqueSet);
        setData(unionUserData);
    }

  return (
        <MaterialReactTable table={table} />
  )
};

export default UsersTable;