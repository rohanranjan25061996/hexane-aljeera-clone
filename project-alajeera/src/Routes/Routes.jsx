import React from "react";
import { Route, Switch } from "react-router";
import { Content } from "../Pages/Comman/Content";
import { Economy } from "../Pages/Economy/Economy";
import { Corona } from "../Pages/Coronavirus/Corona";
import { Content2 } from "../Pages/Coronavirus/FullArticle/Content";
import { Opinion } from "../Pages/Opinion/Opinion";
import { Content3 } from "../Pages/Opinion/FullArticle/Content";

function AllRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/economy">
          <Economy />
        </Route>
        <Route path="/economy/:id">
          <Content />
        </Route>
        <Route exact path="/corona">
          <Corona />
        </Route>
        <Route path="/corona/:id">
          <Content2 />
        </Route>
        <Route exact path="/opinion">
          <Opinion />
        </Route>
        <Route path="/opinion/:id">
          <Content3 />
        </Route>
      </Switch>
    </>
  );
}

export { AllRoutes };
