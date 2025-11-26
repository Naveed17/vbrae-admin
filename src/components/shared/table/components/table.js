'use client';

import {
  alpha,
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import SimpleBar from 'simplebar-react';
import rowsData from './config';
import { EnhancePagination } from '.';
const NopeRow = () => null;

export default function EnhanceTable({
  rows = [],
  isLoading,
  handleTableAction,
  from,
  columns,
  tableSx,
  pagination,
}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const theme = useTheme();
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array?.map((el, index) => [el, index]);
    stabilizedThis?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis?.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const found = rowsData.find((item) => from === item.action);
  const Component = found?.component ?? NopeRow;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        '& .MuiTableHead-root': {
          '& .MuiTableCell-root': {
            color: theme.palette.text.secondary,
            background: theme.palette.background.paper + '!important',
            p: 1,
            borderWidth: 0,
            textTransform: 'uppercase',
          },
        },
        '& .MuiTableBody-root': {
          '& .MuiTableRow-root': {
            '&:nth-of-type(odd)': {
              background: theme.palette.background.default,
            },
            '&:nth-of-type(even)': {
              backgroundColor: alpha(theme.palette.text.disabled, 0.1),
            },
            '& .MuiTableCell-root': {
              p: 1, // padding for all cells
              borderRadius: 0, // reset all radius first
              borderWidth: 0,
              mb: 2,
            },
            '& .MuiTableCell-root:first-of-type': {
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            },
            '& .MuiTableCell-root:last-of-type': {
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            },
          },
        },
      }}
    >
      <TableContainer>
        <SimpleBar style={{ maxHeight: '100%' }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              width: '100%',
              minWidth: columns.length * 150,
              borderCollapse: 'separate',
              borderSpacing: '0 5px',
              ...tableSx,
            }}
          >
            <TableHead>
              <TableRow hover>
                {columns.map((column) => (
                  <TableCell
                    sx={{ fontSize: 12 }}
                    key={column.id}
                    align={column.align}
                    width={column.width}
                  >
                    {column.sortable ? (
                      <TableSortLabel
                        onClick={(e) => handleRequestSort(e, column.id)}
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : 'asc'}
                      >
                        {column.label}
                      </TableSortLabel>
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {isLoading || !rows ? (
                Array.from({ length: 10 }).map((_, idx) => (
                  <TableRow key={idx} hover>
                    {columns.map((column) => (
                      <TableCell align={column.align} key={column.id}>
                        <Skeleton
                          sx={{
                            maxWidth: 100,
                            ml: column.id === 'actions' ? 'auto' : 0,
                          }}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : rows?.length > 0 ? (
                stableSort(rows, getComparator(order, orderBy)).map((row, idx) => (
                  <Component
                    key={idx}
                    row={row}
                    isLoading={isLoading}
                    handleTableAction={handleTableAction}
                    columns={columns}
                    selected={selected}
                    handleSelect={handleClick}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    <Typography variant="body2" color="text.secondary">
                      No data found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </SimpleBar>
        {pagination && <EnhancePagination pagination={pagination} />}
      </TableContainer>
    </Box>
  );
}
