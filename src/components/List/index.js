import React from 'react';
import { 
  withStyles, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Checkbox, 
  IconButton,
  Button 
} from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArchiveIcon from '@material-ui/icons/Archive';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import SecurityIcon from '@material-ui/icons/Security';

import './styles.scss';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FFF",
    color: "##383838",
  },
  body: { 
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(2n+1)': { backgroundColor: "#F4F4F4" },
    '&:nth-of-type(2n)': { backgroundColor: "#E9E9E9"},
  },
}))(TableRow);


function ListUser(props) {
  const row = props.usersFiltered
  return (
    <>
    <TableContainer className="listUserContainer">
      <Table className="contentList">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"></StyledTableCell> 
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left">USUÁRIO</StyledTableCell>
            <StyledTableCell align="left">EMAIL</StyledTableCell>
            <StyledTableCell align="center">DATA DE INCLUSÃO</StyledTableCell>
            <StyledTableCell align="center">DATA DE ALTERAÇÃO</StyledTableCell>
            <StyledTableCell align="center">REGRAS</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">AÇÕES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map(row => (
            <StyledTableRow key={row} className="row">
              <div className="overlay"></div>
              <StyledTableCell align="left"><Checkbox checked={false} /></StyledTableCell>
              <StyledTableCell align="left">{row.user}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.date_inclusion}</StyledTableCell>
              <StyledTableCell align="center">{row.date_change}</StyledTableCell>
              <StyledTableCell align="center">{row.rules}</StyledTableCell>
              <StyledTableCell align="center" style={{ color: 'green' }}>{row.status}</StyledTableCell>

              <StyledTableCell align="center" className="hidden">
                <IconButton size="small">
                  <DeleteIcon />
                </IconButton>
                <IconButton size="small">
                  <ArchiveIcon />
                </IconButton>
                <IconButton size="small">
                  <SecurityIcon />
                </IconButton>
                <IconButton size="small">
                  <CreateIcon />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="center">
                <IconButton size="small">
                  <MoreHorizIcon />
                </IconButton>
              </StyledTableCell> 
            </StyledTableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <div className="containerNavigation">
      <Button className="btnPage">Primeiro</Button>
      <Button className="btnPage">Anterior</Button>
      <Button variant="contained" color="primary" className="current">
        1
      </Button>
      <Button className="btnPage">Próximo</Button>
      <Button className="btnPage">Último</Button>
    </div> 
  </>
  );
}

export default ListUser