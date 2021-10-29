import axios from "axios"

export const fetchApi = (route: string) => axios.get(`${process.env.REACT_APP_API_ROUTE}${route}`).then(res => res);