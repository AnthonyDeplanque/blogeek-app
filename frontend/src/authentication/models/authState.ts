import { Users } from "../../models/Users";

export default interface AuthState {
  data: Users | null
}