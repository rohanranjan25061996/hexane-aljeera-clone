import React from "react"
import { Route, Switch } from "react-router"
import { Content } from "../Pages/Comman/Content"
import { Economy } from "../Pages/Economy/Economy"
import Search from '../Pages/Search/Search';

function AllRoutes(){


    return(
        <>
        <Switch>
            <Route exact path = "/economy">
                <Economy />
            </Route>
            <Route path = "/economy/:id">
                <Content />
            </Route>
            <Route path='/search/:title'>
                    <Search/>
            </Route>    
        </Switch>
        </>
    )
}

export {AllRoutes}