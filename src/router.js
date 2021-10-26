import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isSignedIn } from "./services/security";

import Login from "./pages/Login";
import Teams from "./pages/Teams";
import RegisterSchool from "./pages/RegisterSchool";

function PrivateRoute({ children, ...rest }) {
    if (isSignedIn()) {
        return <Route {...rest}>{children}</Route>
    }else{
        return <Redirect to="/" />
    }
}

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Login />
                </Route>
                <Route exact path="/registerSchool" >
                    <RegisterSchool/>
                </Route>
                <PrivateRoute path="/teams">
                    <Teams />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;