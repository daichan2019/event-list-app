import React, { useEffect, useReducer } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";

const useStyles = makeStyles({
  wrapper: {
    padding: "0 15px",
  },
});

const APP_KEY = "appWithRedux";

const App = () => {
  const classes = useStyles();

  const appState = localStorage.getItem(APP_KEY);

  // reducerでのstateをここで統合
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Container maxWidth="md">
        <Header />
        <div className={classes.wrapper}>
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
