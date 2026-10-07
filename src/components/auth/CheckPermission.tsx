import type { ReactNode } from "react";
import useAuth from "../../lib/hooks/useAuth";

export default function CheckPermission ({children, permission}: Readonly<{children: ReactNode, permission:string}>){
    const {loggedInUser} = useAuth();

    if((loggedInUser?.permission && loggedInUser.permission.includes(permission) || loggedInUser?.role === 'admin')){
        return children
    }else{
        <></>
    }
}