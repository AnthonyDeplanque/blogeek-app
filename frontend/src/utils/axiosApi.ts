import axios from "axios"

export const fetchApi = async (route: string) => {
  console.log(process.env.REACT_APP_API_ROUTE);
  return await axios.get(`${process.env.REACT_APP_API_ROUTE}${route}`).then(res => res.data);
}