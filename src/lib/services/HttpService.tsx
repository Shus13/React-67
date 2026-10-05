import axios, { type AxiosRequestConfig } from "axios";
import { AppConfig } from "../config/AppConfig";

const axiosClient = axios.create({
    baseURL: AppConfig.apiUrl,
    timeout: 30000,
    timeoutErrorMessage: "Sorry! server doesnot respond in time",
    responseType: "json",
    responseEncoding: "UTF-8",

    headers: {
        "Content-Type": "application/json"
    },

    withCredentials: AppConfig.environment === "dev" ? false : true,
})

export const postRequest = async (url: string, payload: Record<string, string|number>, config: AxiosRequestConfig = {}) => {
    const detail = await axiosClient.post(url, payload, config);
    return detail.data;
}

export const patchRequest = async (url: string, payload: Record<string, string|number>, config: AxiosRequestConfig = {}) => {
    const detail = await axiosClient.post(url, payload, config);
    return detail.data;
}

export const putRequest = async (url: string, payload: Record<string, string|number>, config: AxiosRequestConfig = {}) => {
    const detail = await axiosClient.post(url, payload, config);
    return detail.data;
}

export const getRequest = async (url: string, config: AxiosRequestConfig = {} ) => {
    const detail = await axiosClient.get(url, config);
    return detail.data;
}

export const deleteRequest = async (url: string, config: AxiosRequestConfig = {} ) => {
    const detail = await axiosClient.get(url, config);
    return detail.data;
}

export default axiosClient