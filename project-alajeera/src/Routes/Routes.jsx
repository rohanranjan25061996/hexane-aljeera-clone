import React from "react"
import { Route, Switch } from "react-router"
import { Content } from "../Pages/Comman/Content"
import { Economy } from "../Pages/Economy/Economy"
import {Corona} from "../Pages/Coronavirus/Corona"
import { Content2 } from "../Pages/Coronavirus/FullArticle/Content"
import { Features } from "../Pages/Features/Features"
import { FeaturesContent } from "../Pages/Features/FeaturesContent"

function AllRoutes(){


    return(
        <>
        <Switch>
            <Route exact path = "/features">
                <Features />
            </Route>
            <Route path = "/features/:id">
                <FeaturesContent />
            </Route>
            <Route exact path = "/economy">
                <Economy />
            </Route>
            <Route path = "/economy/:id">
                <Content />
            </Route>
            <Route exact path = "/corona">
                <Corona />
            </Route>
            <Route path = "/corona/:id">
                <Content2 />
            </Route>

            <Route>
                <h1> 404 Not Found </h1>
            </Route>
        </Switch>
        </>
    )
}

export {AllRoutes}