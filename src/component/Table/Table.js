import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Mehar Grewal",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
  createData(
    "Will Anderson",
    "+44 83743 3883",
    "62 mayfair avenue ",
    "5 acres",
    "Adam Smith"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Owner Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}