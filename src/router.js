import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isSignedIn } from "./services/security";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Teams from "./pages/Teams";
import RegisterResponsible from "./pages/RegisterResponsible";


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
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/register/responsible">
                    <RegisterResponsible />
                </Route>
                <PrivateRoute path="/teams">
                    <Teams />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;