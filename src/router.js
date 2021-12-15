import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isSignedIn, getUserRole } from "./services/security";

import Login from "./pages/Login";
import Teams from "./pages/Teams";
import RegisterSchool from "./pages/RegisterSchool";
import AddMember from "./pages/AddMember";
import MemberClassCreate from "./pages/MemberClassCreate";
import CreateClass from "./pages/CreateClass";
import ListOfTasks from "./pages/ListOfTasks";
import CreateTask from "./pages/CreateTask";
import TaskUserList from "./pages/TaskUserList";
import CorrectionTask from "./pages/CorrectionTask";
import TaskDelivery from "./pages/TaskDelivery";
import Notes from "./pages/Notes";
import CastNote from "./pages/CastNote";

function PrivateRoute({ role, children, ...rest }) {

    if (!isSignedIn()) {
        return <Redirect to="/" />
    }

    if (!role && isSignedIn()) {
        return <Route {...rest}>{children} </Route>;
    }

    const roleUser = getUserRole();

    if (role !== roleUser) {
        return <Redirect to="/" />

    } else {
        return <Route {...rest}>{children} </Route>;
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
                    <RegisterSchool />
                </Route>
                <PrivateRoute path="/teams">
                    <Teams />
                </PrivateRoute>
                <PrivateRoute
                    path="/addMember"
                    role="ROLE_ADMIN" >
                    <AddMember />
                </PrivateRoute>
                <PrivateRoute
                    path="/memberClassCreate"
                    role="ROLE_ADMIN">
                    <MemberClassCreate />
                </PrivateRoute>
                <PrivateRoute
                    path="/createClass"
                    role="ROLE_ADMIN">
                    <CreateClass />
                </PrivateRoute>
                <PrivateRoute path="/listOfTasks">
                    <ListOfTasks />
                </PrivateRoute>
                <PrivateRoute path="/createTask">
                    <CreateTask />
                </PrivateRoute>
                <PrivateRoute path="/taskUserList">
                    <TaskUserList />
                </PrivateRoute>
                <PrivateRoute path="/correctionTask">
                    <CorrectionTask />
                </PrivateRoute>
                <PrivateRoute path="/taskDelivery">
                    <TaskDelivery />
                </PrivateRoute>
                <PrivateRoute path="/notes">
                    <Notes />
                </PrivateRoute>
                <PrivateRoute path="/castNote">
                    <CastNote />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;