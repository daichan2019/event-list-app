import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const OperationLog = ({ operationLog }) => {
  return (
    <TableRow hover>
      <TableCell align="left">{operationLog.description}</TableCell>
      <TableCell align="left">{operationLog.operatedAt}</TableCell>
    </TableRow>
  );
};

export default OperationLog;
