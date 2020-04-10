import { LoginScreen } from './screens/Login/LoginScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import { RegisterScreen } from './screens/Register/RegisterScreen';
import { ProfileScreen } from './screens/Profile/ProfileScreen';
import { NewIncident } from './screens/NewIncident/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LoginScreen}/>
              <Route path="/register" component={RegisterScreen}/>
              <Route path="/profile" component={ProfileScreen}/>
              <Route path="/incidents/new" component={NewIncident}/>
            </Switch> 
        </BrowserRouter>
    )
}