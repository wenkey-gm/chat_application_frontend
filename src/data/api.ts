import axios from "axios";
import { API_URL } from "../utils/constants";
import { LoginResponse, UserLogin } from "../models/login";

export const loginUser = async (user: UserLogin): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, user);
  return response.data;
};
