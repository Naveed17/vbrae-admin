import { TableCell, TableRow, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Image from 'next/image';

export default function IgdbRow({ row, columns, key = 0, handleTableAction }) {
    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'id') {
                    value = row?.[column.id];
                } else if (column.id === 'image') {
                    value = row?.image ? (
                        <div style={{ position: 'relative', width: 75, height: 75 }}>
                            <Image src={row.image} alt={row.title} fill style={{ objectFit: 'cover', borderRadius: 4 }} />
                        </div>
                    ) : null;
                } else if (column.id === 'action') {
                    value = (
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="small" 
                            startIcon={<AddIcon />}
                            onClick={() => handleTableAction({ action: 'add', data: row })}
                        >
                            Add
                        </Button>
                    );
                } else {
                    value = row?.[column.id];
                }

                return (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{ fontSize: 12, width: column.id === 'storyline' ? '40%' : 'auto' }}
                    >
                        {value || '--'}
                    </TableCell>
                );
            })}
        </TableRow>
    );
}
