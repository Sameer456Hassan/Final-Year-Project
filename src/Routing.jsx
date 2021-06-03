import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Guest from './Guest'
import Employee from './Employee'
import Card from './Card'
import ScrollToTop from './scroll'

const Routing = () =>{
    return(
        <>
            <BrowserRouter>
                <Card />
                <ScrollToTop />
                <Switch>
                    <Route exact path = '/home' component={Home} />
                    <Route exact path = '/guest' component={Guest} />
                    <Route exact path = '/employee' component={Employee} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routing;