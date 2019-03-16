import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//utils
// import { formatDate } from '../../../helpers/utils';

//material-ui
import TableUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class Table extends Component {
  render() {
    return (
      <TableUI>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell numeric>Creation Date</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.users.map(row => {
            return (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Link to={`/user/${row._id}`}>Details</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableUI>
    );
  }
}

Table.propTypes = {
  users: PropTypes.array,
};

Table.defaultProps = {
  users: [],
};

export default Table;
