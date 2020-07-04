import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const useStyles = makeStyles((theme) => ({
  form: {
    flexDirection: "column",
    display: "flex",
  },
  TextField: {
    marginTop: "20px",
  },
  Button: {
    margin: theme.spacing(2),
    fontSize: "1rem",
  },
}));

const EventForm = () => {
  const classes = useStyles();

  const { state, dispatch } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = () => {
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました。",
      operatedAt: timeCurrentIso8601(),
    });
    setTitle("");
    setBody("");
  };

  const unCreatable = title === "" || body === "";

  const deleteAllEvents = () => {
    const result = window.confirm("全てのイベントを削除してもよろしいですか？");
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS,
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました。",
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllOperationLogs = () => {
    const result = window.confirm("全ての操作ログを削除してもよろしいですか？");
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  return (
    <form className={classes.form} autoComplete="off">
      <h2>イベント作成フォーム</h2>
      <TextField
        className={classes.TextField}
        id="outlined-basic"
        label="タイトル"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className={classes.TextField}
        id="outlined-basic"
        label="ボディー"
        multiline
        rows={4}
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className={classes.buttonWrap}>
        <Button
          className={classes.Button}
          variant="contained"
          color="primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </Button>
        <Button
          className={classes.Button}
          variant="contained"
          color="secondary"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </Button>
        <Button
          className={classes.Button}
          variant="contained"
          color="secondary"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
