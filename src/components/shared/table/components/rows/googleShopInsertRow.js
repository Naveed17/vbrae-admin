import { TableCell, TableRow, Checkbox, Skeleton, Link, Badge, Chip, Box, Tooltip, IconButton, alpha, useTheme } from '@mui/material';
import { OpenInNew as OpenInNewIcon, AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';

export default function GoogleShopInsertRow({ row, columns, key = 0, selected, handleSelect, handleTableAction }) {
    const isSelected = selected.indexOf(row) !== -1;
    const theme = useTheme();
    return (
        <TableRow hover tabIndex={-1} key={key} sx={{ position: 'relative' }}>
            {columns.map((column, idx) => {
                let value;

                if (column.id === 'checkbox') {
                    value = <Checkbox checked={isSelected} onChange={(event) => handleSelect(event, row)} />;
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

                const isLastColumn = idx === columns.length - 1;

                return (
                    <TableCell
                        sx={{
                            whiteSpace: column.id === 'product' ? 'normal' : 'nowrap',
                            wordWrap: column.id === 'product' ? 'break-word' : 'normal',
                            fontSize: 12,
                            position: isLastColumn ? 'relative' : 'static'
                        }}
                        key={column.id}
                        align={column.align}
                    >
                        {value || "--"}
                        {isLastColumn && isSelected && (
                            <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
                                <Tooltip title="Add Selected Product to Google Shop">
                                    <IconButton
                                        size="small"
                                        onClick={() => handleTableAction({ action: 'add', data: row })}
                                        sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.15), color: 'primary.main', '&:hover': { backgroundColor: alpha('#1976d2', 0.25) } }}
                                    >
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        )}
                    </TableCell>
                );
            })}
        </TableRow>
    );
}
