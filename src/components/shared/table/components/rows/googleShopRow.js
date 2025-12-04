import { TableCell, TableRow, Checkbox, Skeleton } from '@mui/material';

export default function GoogleShopRow({ row, columns, key = 0, selected, handleSelect }) {
    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={selected.indexOf(row) !== -1} onChange={(event) => handleSelect(event, row)} />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{ 
                            whiteSpace: column.id === 'description' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'description' ? 'break-word' : 'normal',
                            fontSize: 12 
                        }}
                        key={column.id}
                        align={column.align}
                    >
                        {value || "--"}
                    </TableCell>
                );
            })}
        </TableRow>
    );
}
