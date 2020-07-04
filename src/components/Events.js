import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AppContext from "../contexts/AppContext";
import Event from "./Event";

const Events = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>イベント一覧</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">タイトル</TableCell>
              <TableCell align="left">ボディー</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Events;
