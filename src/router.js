import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isSignedIn } from "./services/security";

import Login from "./pages/Login";
import Teams from "./pages/Teams";
import RegisterSchool from "./pages/RegisterSchool";
import AddMember from "./pages/AddMember";
import MemberClassCreate from "./pages/MemberClassCreate";
import VideoCall from "./pages/VideoCall";

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
                <PrivateRoute path="/addMember">
                    <AddMember />
                </PrivateRoute>
                <PrivateRoute path="/memberClassCreate">
                    <MemberClassCreate />
                </PrivateRoute>
                <PrivateRoute path="/videoCall">
                    <VideoCall />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;