import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoHooksBasic from "../TodoHooksBasic/TodoHooksBasic";
import { TodoHooksContext } from "../TodoHooksContext/TodoHooksContext";
import { TodoHooksReducer } from "../TodoHooksReducer/TodoHooksReducer";
import Title from "../Layout/Title";
import Navbar from "../Layout/Navbar";
import NotFound from "../Layout/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Title type="Todo" />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <TodoHooksBasic />
        </Route>
        <Route path="/context">
          <TodoHooksContext />
        </Route>
        <Route path="/reducer">
          <TodoHooksReducer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
