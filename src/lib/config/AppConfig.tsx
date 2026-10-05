export const AppConfig = {
    apiUrl: import.meta.env.VITE_PUBLIC_API_BASE_URL,
    environment: import.meta.env.NODE_ENV || "dev"
};