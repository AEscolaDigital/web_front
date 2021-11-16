import { getUserRole } from "../../services/security";

function PermissionComponent({role, children}) {

    const roleUser = getUserRole();

    const role_ = role?.split(",");

    return (
        <>
           {roleUser === role_[0] && (
               children
           ) }
           {roleUser === role_[1] && (
               children
           ) }
        </>
    );
}

export default PermissionComponent;