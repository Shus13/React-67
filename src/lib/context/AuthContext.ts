import { createContext } from "react";
import type { IAuthContext, IUserDetail } from "../types/Auth.contract";


const AuthContext = createContext<IAuthContext>({
    login: async(): Promise<void | IUserDetail> => {},
    loggedInUser: null,
    getLoggedInUserDetail: async(): Promise<void | IUserDetail> => {}
})

export default AuthContext