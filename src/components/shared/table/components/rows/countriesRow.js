import React from 'react';
import {
  TableCell,
  TableRow,
  Skeleton,
  Chip,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { MoreVert, Edit, Delete } from '@mui/icons-material';

const CountriesRow = ({ row, columns, key = 0, handleTableAction }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => {
    handleTableAction({ action, data: row });
    handleClose();
  };

  return (
    <TableRow hover tabIndex={-1} key={key}>
      {columns.map((column) => {
        let value;

        if (column.id === 'status') {
          value = (
            <Chip
              label={row.status}
              size="small"
              color={row.status === 'Active' ? 'success' : 'default'}
              variant="outlined"
            />
          );
        } else if (column.id === 'action') {
          value = (
            <>
              <IconButton onClick={handleClickOpen} size="small">
                <MoreVert />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => handleAction('edit')}>
                  <Edit sx={{ mr: 1, fontSize: 18 }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={() => handleAction('delete')}>
                  <Delete sx={{ mr: 1, fontSize: 18 }} />
                  Delete
                </MenuItem>
              </Menu>
            </>
          );
        } else {
          value = row ? row[column.id] : <Skeleton variant="text" width={100} />;
        }

        return (
          <TableCell
            sx={{ whiteSpace: 'nowrap', fontSize: 12 }}
            key={column.id}
            align={column.align}
          >
            {value || "--"}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default CountriesRow;
