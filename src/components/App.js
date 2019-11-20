import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Menu from "./Menu";
import Users from "./users";
import Posts from "./posts";

const Tasks = () => (<div>Tasks</div>);

const App = () => (
    <BrowserRouter>
        <Menu/>
        <div  className="margen">
            <Route exact path='/' component={Users}/>
            <Route exact path='/tasks' component={Tasks}/>
            <Route exact path='/posts/:key' component={Posts}/>
        </div>
    </BrowserRouter>
);

export default App;