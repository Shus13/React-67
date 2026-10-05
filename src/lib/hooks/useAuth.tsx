import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function useAuth () {
    const authContextData = useContext(AuthContext)

    return {...authContextData}
}
