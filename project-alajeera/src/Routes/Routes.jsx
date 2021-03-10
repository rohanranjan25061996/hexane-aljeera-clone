import React from "react"
import { Route, Switch } from "react-router"
import { Content } from "../Pages/Comman/Content"
import { Economy } from "../Pages/Economy/Economy"

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
        </Switch>
        </>
    )
}

export {AllRoutes}