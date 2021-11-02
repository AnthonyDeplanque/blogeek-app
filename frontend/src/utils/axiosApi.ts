import axios from "axios"

export const fetchApi = (route: string) => axios.get(`${process.env.REACT_APP_API_ROUTE}${route}`).then(res => res);
export const postApi = (route: string, data: any) => axios.post(`${process.env.REACT_APP_API_ROUTE}${route}`, data).then(res => res);