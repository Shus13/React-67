import { Outlet } from "react-router"

export default function CmsUserLayout() {
    const {loggedInUser} = useAuth()

    if(loggedInUser && [].includes(loggedInUser.role)) {
        return <Outlet></Outlet>
    }else{
        return<>403 Permission Denied</>
    }
}