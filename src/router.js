import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isSignedIn } from "./services/security";

import Login from "./pages/Login";
import Teams from "./pages/Teams";
import RegisterSchool from "./pages/RegisterSchool";
import AddMember from "./pages/AddMember";
import MemberClassCreate from "./pages/MemberClassCreate";
import CreateClass from "./pages/CreateClass";
import ListOfTasks from "./pages/ListOfTasks";
import CreateTask from "./pages/CreateTask";

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
                <PrivateRoute path="/createClass">
                    <CreateClass />
                </PrivateRoute>
                <PrivateRoute path="/listOfTasks">
                    <ListOfTasks />
                </PrivateRoute>
                <PrivateRoute path="/createTask">
                    <CreateTask />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;