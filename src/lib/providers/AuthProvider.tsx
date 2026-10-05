import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContext";
import { type CredentialsType, type IUserDetail, type LoginResponseType } from "../types/Auth.contract";
import { getRequest, postRequest } from "../services/HttpService";
import Cookies from "js-cookie";

export default function AuthProvider ({children}: Readonly<{children:ReactNode}>) {

    const [loggedInUser, setLoggedInUser] = useState<null | IUserDetail>(null);

    const [loading, setLoading] = useState<boolean> (true)

    const refreshToken = async () => {
        const refreshResponse = await postRequest("/auth/refresh", {
            refreshToken: Cookies.get("refreshToken") as string,
            expiresInMins: 180
        }, {withCredentials: true}) as unknown as LoginResponseType

        Cookies.set("accessToken", refreshResponse.accessToken, {
            expires: 1, sameSite: "lax", secure: true
        })

        Cookies.set("refreshToken", refreshResponse.refreshToken, {
            expires: 1, sameSite: "lax", secure: true
        })

        setTimeout(refreshToken, 170*60*1000)
    }

    const login = async (data: CredentialsType): Promise<void | IUserDetail> => {
        const loginResponse = (await postRequest("/auth/login", {
            ...data,
            expiresInMins: 180,
        })) as unknown as LoginResponseType
        console.log(loginResponse)

        Cookies.set("accessToken", loginResponse.accessToken, {
            expires: 1, sameSite: "lax", secure: true
        })

        Cookies.set("refreshToken", loginResponse.refreshToken, {
            expires: 1, sameSite: "lax", secure: true
        })

        setTimeout(refreshToken, 170*60*1000)

        return await getLoggedInUserDetail()
    }

    const getLoggedInUserDetail = async (): Promise<void | IUserDetail> => {
        try {
            const userDetail = await getRequest("/auth/me", {
                headers: {
                    "Authorization": "Bearer" + Cookies.get("accessToken")
                }
            }) as unknown as IUserDetail
            setLoggedInUser(userDetail)
        } catch (exception) {
            console.error(exception)

            Cookies.remove("accessToken")
            Cookies.remove("refreshToken")
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => {
            const token = Cookies.get("accessToken")
            if(token){
                getLoggedInUserDetail();
            }else{
                setLoading(false)
            }
        }
    }, [])

    if(loading){
        return (
            <>
            <section className="w-full h-screen flex items-center justify-center text-lg font-semibold">
                <div className="animate-bounce">
                    <div className="flex items-center justify-center animate-pulse p-10 w-full">Loading...</div>
                </div>
            </section>
            </>
        )
    }

    return(
        <>
        <AuthContext.Provider 
        value={{
            login: login,
            loggedInUser: loggedInUser as IUserDetail,
            getLoggedInUserDetail: getLoggedInUserDetail,
        }}
        >
        {children}
        </AuthContext.Provider>
        </>
    )
}