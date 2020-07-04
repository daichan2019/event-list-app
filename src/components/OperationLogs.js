import React, { useContext } from "react";
import OperationLog from "./OperationLog";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AppContext from "../contexts/AppContext";

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h2>操作ログ一覧</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">内容</TableCell>
              <TableCell align="left">日時</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.operationLogs.map((operationLog, index) => {
              return <OperationLog key={index} operationLog={operationLog} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OperationLogs;
