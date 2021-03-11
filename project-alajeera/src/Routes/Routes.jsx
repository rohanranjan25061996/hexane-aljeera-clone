import React from 'react';
import { Route, Switch } from 'react-router';
import { Content } from '../Pages/Comman/Content';
import { Economy } from '../Pages/Economy/Economy';
import { Corona } from '../Pages/Coronavirus/Corona';
import { Content2 } from '../Pages/Coronavirus/FullArticle/Content';
import Landing from '../Pages/Landing/Landing';
import Navbar from '../Common/Navbar/Navbar';
import Video from '../Pages/Video/Video';

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/economy'>
          <Economy />
        </Route>
        <Route path='/economy/:id'>
          <Content />
        </Route>
        <Route exact path='/corona'>
          <Corona />
        </Route>
        <Route path='/corona/:id'>
          <Content2 />
        </Route>
        <Route path='/video'>
          <Video />
        </Route>
      </Switch>
    </>
  );
}

export { AllRoutes };
