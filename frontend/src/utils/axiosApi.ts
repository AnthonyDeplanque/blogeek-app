import axios from "axios"

export const fetchApi = async (route: string) => {
  return await axios.get(`${process.env.REACT_APP_API_ROUTE}${route}`).then(res => res.data);
}