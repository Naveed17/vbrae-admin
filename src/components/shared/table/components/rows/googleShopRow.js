import { TableCell, TableRow, Checkbox, Skeleton, Button, Tooltip, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

export default function GoogleShopRow({ row, columns, key = 0, selected, handleSelect, handleTableAction }) {
    const isSelected = selected.indexOf(row) !== -1;

    return (
        <TableRow hover tabIndex={-1} key={key} sx={{ position: 'relative' }}>
            {columns.map((column) => {
                let value;

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={isSelected} onChange={(event) => handleSelect(event, row)} />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{
                            whiteSpace: column.id === 'description' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'description' ? 'break-word' : 'normal',
                            fontSize: 12,
                            filter: isSelected ? 'blur(2px)' : 'none'
                        }}
                        key={column.id}
                        align={column.align}
                    >
                        {value || "--"}
                    </TableCell>
                );
            })}
            {isSelected && (
                <>
                    <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)', zIndex: 9, cursor: 'pointer' }} onClick={(e) => handleSelect(e, row)} />
                    <Box sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                        <Tooltip title="Delete Selected Product from Google Shop">
                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => handleTableAction({ action: 'delete', data: row })}
                            >
                                Delete
                            </Button>
                        </Tooltip>
                    </Box>
                </>
            )}
        </TableRow>
    );
}
