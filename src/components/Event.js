import React, { useContext } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { ADD_OPERATION_LOG, DELETE_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;

  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除してもよろしいですか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました。`,
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  return (
    <TableRow hover>
      <TableCell align="left">{id}</TableCell>
      <TableCell align="left">{event.title}</TableCell>
      <TableCell align="left">{event.body}</TableCell>
      <TableCell align="left">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickDeleteButton}
        >
          削除
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Event;
