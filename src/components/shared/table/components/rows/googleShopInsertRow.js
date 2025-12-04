import { TableCell, TableRow, Checkbox, Skeleton, Link, Badge, Chip, Box } from '@mui/material';
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';

export default function GoogleShopInsertRow({ row, columns, key = 0, selected, handleSelect }) {
    return (
        <TableRow hover tabIndex={-1} key={key}>
            {columns.map((column) => {
                let value;

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={selected.indexOf(row) !== -1} onChange={(event) => handleSelect(event, row)} />;
                } else if (column.id === 'link') {
                    value = row ? (
                        <Link href={row[column.id]} target="_blank" rel="noopener noreferrer">
                            <OpenInNewIcon sx={{ fontSize: 18 }} />
                        </Link>
                    ) : <Skeleton variant="text" width={100} />;
                } else if (column.id === 'google_merchant') {
                    value = row ? <Chip label={row[column.id]} color="primary" variant="outlined" size="small" /> : <Skeleton variant="text" width={100} />;
                } else {
                    value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
                }

                return (
                    <TableCell
                        sx={{
                            whiteSpace: column.id === 'product' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'product' ? 'break-word' : 'normal',
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
